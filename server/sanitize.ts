const controlCharacters = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

export function sanitizeSingleLine(value: string) {
  return value.replace(controlCharacters, "").replace(/\s+/g, " ").trim();
}

export function sanitizeMessage(value: string) {
  return value
    .replace(controlCharacters, "")
    .replace(/\r\n/g, "\n")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim();
}
