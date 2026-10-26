/** Price and placeholder helpers. The public fee is "A$3,500 a month, no GST". */

const BAD_GST =
  /\[CONFIRM GST basis\]|including GST(?: and)?|incl\.?\s*GST|\bex GST\b|\bA\$3,182\b|\b3,182\b/gi;

export function stripGst(input: string): string {
  return input
    .replace(BAD_GST, "no GST")
    .replace(/no GST(?:\s+no GST)+/gi, "no GST")
    .replace(/[ ]{2,}/g, " ")
    .replace(/\s+([.,;:])/g, "$1")
    .replace(/\(\s*\)/g, "")
    .trim();
}

export const priceStatement = "A$3,500 a month, no GST";
export const priceFigure = "A$3,500";
export const priceUnit = "/mo";
export const priceLine = "A$3,500 a month, no GST. AI model costs included. No contract.";

/** Preview and local builds show slot markers. Production builds must not. */
export function showPlaceholders() {
  return process.env.VERCEL_ENV !== "production";
}

export const markerPattern =
  /\[\[[^\]]+\]\]|\[(?:COPY|DECISION|CONFIRM|DRAFT|PLACEHOLDER|OPTION|IMAGE|DATE|READ TIME|SCREENSHOT|RESULT|TESTIMONIAL|PHOTO|BIO|SUBSTACK|BOOKING|TBC)[^\]]*\]/g;

export function findMarkers(text: string) {
  return text.match(markerPattern) ?? [];
}

export function splitMarkers(text: string) {
  const parts: { text: string; marker: boolean }[] = [];
  const pattern = new RegExp(markerPattern.source, "g");
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text))) {
    if (match.index > last) {
      parts.push({ text: text.slice(last, match.index), marker: false });
    }

    parts.push({ text: match[0], marker: true });
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    parts.push({ text: text.slice(last), marker: false });
  }

  return parts;
}

export function slot(label: string, limit?: number) {
  return limit ? `[COPY: ${label}, ≤${limit}]` : `[COPY: ${label}]`;
}

export function isTbc(value: string) {
  return /TBC/i.test(value);
}

export function readingMinutes(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 200));
}
