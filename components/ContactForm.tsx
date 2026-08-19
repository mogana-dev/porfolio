"use client";

import { cloneElement, isValidElement, useMemo, useState, type ReactElement } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";

import { dict, type Locale } from "@/lib/dictionary";

type FormState = {
  name: string;
  email: string;
  company: string;
  country: string;
  jobTitle: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const t = dict[locale].contactForm;

  const emptyForm = useMemo<FormState>(
    () => ({
      name: "",
      email: "",
      company: "",
      country: "",
      jobTitle: "",
      message: "",
    }),
    [],
  );

  const [form, setForm] = useState<FormState>(emptyForm);
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isValid =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.message.trim() !== "";

  const submit = async (requestType: string) => {
    setTouched(true);

    if (!isValid || status === "loading") {
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          requestType,
          locale,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error || t.errorFallback);
        return;
      }

      setStatus("success");
      setForm(emptyForm);
      setTouched(false);
    } catch {
      setStatus("error");
      setErrorMessage(t.errorNetwork);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#08172a] px-4 py-3 text-sm text-white outline-none placeholder:text-white/28 transition duration-300 hover:border-white/18 focus:border-[#ff6b35]/65 focus:ring-2 focus:ring-[#ff6b35]/15";

  if (status === "success") {
    return (
      <div
        className="border border-emerald-400/20 bg-emerald-400/[0.035] px-6 py-10 text-center sm:px-8"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-300" />
        <p className="mt-4 font-display text-xl font-extrabold text-white">
          {t.successTitle}
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-white/62">
          {t.successBody}
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white underline decoration-[#ff6b35] decoration-2 underline-offset-4"
        >
          {t.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="border-t border-white/10 pt-6"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t.name} required>
          <input
            type="text"
            autoComplete="name"
            className={inputClass}
            placeholder={t.namePlaceholder}
            value={form.name}
            onChange={(event) =>
              setForm({
                ...form,
                name: event.target.value,
              })
            }
          />
        </Field>

        <Field label={t.email} required>
          <input
            type="email"
            autoComplete="email"
            className={inputClass}
            placeholder={t.emailPlaceholder}
            value={form.email}
            onChange={(event) =>
              setForm({
                ...form,
                email: event.target.value,
              })
            }
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label={t.company} hint={t.optional}>
          <input
            type="text"
            autoComplete="organization"
            className={inputClass}
            placeholder={t.companyPlaceholder}
            value={form.company}
            onChange={(event) =>
              setForm({
                ...form,
                company: event.target.value,
              })
            }
          />
        </Field>

        <Field label={t.jobTitle} hint={t.optional}>
          <input
            type="text"
            autoComplete="organization-title"
            className={inputClass}
            placeholder={t.jobTitlePlaceholder}
            value={form.jobTitle}
            onChange={(event) =>
              setForm({
                ...form,
                jobTitle: event.target.value,
              })
            }
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label={t.country} hint={t.optional}>
          <input
            type="text"
            autoComplete="country-name"
            className={inputClass}
            placeholder={t.countryPlaceholder}
            value={form.country}
            onChange={(event) =>
              setForm({
                ...form,
                country: event.target.value,
              })
            }
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label={t.message} required>
          <textarea
            rows={6}
            className={`${inputClass} resize-y`}
            placeholder={t.messagePlaceholder}
            value={form.message}
            onChange={(event) =>
              setForm({
                ...form,
                message: event.target.value,
              })
            }
          />
        </Field>
      </div>

      {touched && !isValid && (
        <p className="mt-4 flex items-start gap-2 text-xs text-amber-300">
          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {t.validation}
        </p>
      )}

      {status === "error" && (
        <p
          className="mt-4 flex items-start gap-2 text-xs text-amber-300"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {errorMessage}
        </p>
      )}

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ActionButton
          disabled={status === "loading"}
          onClick={() => submit(t.requestTypeInterview)}
          primary
        >
          {status === "loading" && (
            <Loader2 className="h-4 w-4 animate-spin" />
          )}
          {t.requestInterview}
        </ActionButton>

        <ActionButton
          disabled={status === "loading"}
          onClick={() => submit(t.requestTypeCall)}
        >
          {t.scheduleCall}
        </ActionButton>

        <ActionButton
          disabled={status === "loading"}
          onClick={() => submit(t.requestTypeGeneral)}
        >
          {t.sendMessage}
        </ActionButton>
      </div>

      <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-white/38">
        <Send className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#ff6b35]" />
        {t.privacyNote}
      </p>
    </form>
  );
}

function ActionButton({
  children,
  onClick,
  disabled,
  primary = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  primary?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={
        primary
          ? "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#ff6b35] px-4 py-3 text-sm font-extrabold text-white transition hover:bg-[#ff7a49] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] disabled:cursor-not-allowed disabled:opacity-55"
          : "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/12 bg-transparent px-4 py-3 text-sm font-bold text-white/76 transition hover:border-[#ff6b35]/55 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] disabled:cursor-not-allowed disabled:opacity-55"
      }
    >
      {children}
    </button>
  );
}

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/46">
        {label}

        {required && (
          <span className="text-[#ff6b35]" aria-hidden="true">
            *
          </span>
        )}

        {hint && (
          <span className="normal-case tracking-normal text-white/28">
            ({hint})
          </span>
        )}
      </span>

      {isValidElement(children)
        ? cloneElement(children as ReactElement<{ "aria-required"?: boolean }>, {
            "aria-required": required ?? false,
          })
        : children}
    </label>
  );
}
