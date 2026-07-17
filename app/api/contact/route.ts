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

export async function POST(request: Request) {
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
      replyTo: email,
      subject: `[Mogana.dev] ${requestType} — ${name}`,
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
