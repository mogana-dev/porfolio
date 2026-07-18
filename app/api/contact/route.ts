import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  country?: string;
  jobTitle?: string;
  requestType: string;
  preferredContact: string;
  message: string;
  locale?: "en" | "fr";
};

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Header fields (subject, replyTo) go straight into raw SMTP headers, not the
// HTML body, so escapeHtml() doesn't protect them — a value containing CR/LF
// could inject extra headers. Strip control characters before they're used
// as header values.
function sanitizeHeaderValue(input: string) {
  return input.replace(/[\r\n]+/g, " ").trim();
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_LENGTHS = {
  name: 200,
  email: 254,
  company: 200,
  country: 100,
  jobTitle: 200,
  requestType: 100,
  preferredContact: 100,
  message: 5000,
} as const;

// In-memory sliding-window rate limit: 5 submissions per 10 minutes per IP.
// This resets on server restart and isn't shared across instances, but for a
// single-instance low-traffic site it's a real, dependency-free deterrent
// against scripted abuse of the Resend quota.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  submissionLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, country, jobTitle, requestType, preferredContact, message, locale } = body;
  const isFr = locale === "fr";

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: isFr ? "Le nom, l'e-mail et le message sont requis." : "Name, email and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(email.trim())) {
    return NextResponse.json(
      { error: isFr ? "Merci de renseigner une adresse e-mail valide." : "Please provide a valid email address." },
      { status: 400 }
    );
  }

  for (const [field, max] of Object.entries(MAX_LENGTHS)) {
    const value = body[field as keyof ContactPayload];
    if (typeof value === "string" && value.length > max) {
      return NextResponse.json(
        { error: isFr ? "Une des valeurs saisies est trop longue." : "One of the submitted values is too long." },
        { status: 400 }
      );
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "hello@mogana.dev";

  if (!apiKey) {
    // No email service configured — return a clear, actionable error rather than
    // silently failing or pretending the message was sent.
    return NextResponse.json(
      {
        error: isFr
          ? "Le service e-mail n'est pas encore configur\u00e9 (RESEND_API_KEY manquant). Merci d'utiliser WhatsApp ou l'e-mail \u00e0 la place, ou de configurer Resend \u2014 voir le README."
          : "The email service isn't configured yet (missing RESEND_API_KEY). Please use the WhatsApp or email link instead, or configure Resend — see README.",
      },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family: Arial, sans-serif; font-size: 14px; color: #0A0E27;">
        <h2 style="margin-bottom: 4px;">New enquiry from Mogana.dev</h2>
        <p style="color:#666; margin-top:0;">Request type: <strong>${escapeHtml(requestType)}</strong></p>
        <table cellpadding="6" style="border-collapse: collapse;">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          ${company ? `<tr><td><strong>Company</strong></td><td>${escapeHtml(company)}</td></tr>` : ""}
          ${country ? `<tr><td><strong>Country</strong></td><td>${escapeHtml(country)}</td></tr>` : ""}
          ${jobTitle ? `<tr><td><strong>Job Title</strong></td><td>${escapeHtml(jobTitle)}</td></tr>` : ""}
          <tr><td><strong>Preferred contact</strong></td><td>${escapeHtml(preferredContact)}</td></tr>
        </table>
        <p style="margin-top: 16px;"><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: "Mogana.dev Contact Form <onboarding@resend.dev>",
      to: toEmail,
      replyTo: sanitizeHeaderValue(email),
      subject: `[Mogana.dev] ${sanitizeHeaderValue(requestType)} — ${sanitizeHeaderValue(name)}`,
      html,
    });

    if (error) {
      return NextResponse.json({ error: isFr ? "L'e-mail n'a pas pu \u00eatre envoy\u00e9. Merci d'essayer WhatsApp ou l'e-mail directement." : "The email couldn't be sent. Please try WhatsApp or email directly." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: isFr ? "Un probl\u00e8me est survenu lors de l'envoi. Merci d'essayer WhatsApp ou l'e-mail directement." : "Something went wrong sending the message. Please try WhatsApp or email directly." },
      { status: 500 }
    );
  }
}
