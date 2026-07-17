export const CONTACT_EMAIL = "hello@mogana.dev";

/** Digits only, international format, no leading + — required for wa.me links. */
export const WHATSAPP_NUMBER_DIGITS = "919384151991";
export const WHATSAPP_NUMBER_DISPLAY = "+91 938 415 1991";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER_DIGITS}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
