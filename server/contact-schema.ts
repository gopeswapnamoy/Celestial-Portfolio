import { z } from "zod";
import { sanitizeMessage, sanitizeSingleLine } from "./sanitize";

export const contactInputSchema = z.object({
  name: z.string().min(2).max(120).transform(sanitizeSingleLine),
  email: z.string().email().max(180).transform((value) => sanitizeSingleLine(value).toLowerCase()),
  subject: z.string().min(3).max(160).transform(sanitizeSingleLine),
  message: z.string().min(20).max(2000).transform(sanitizeMessage),
  website: z.string().max(200).optional().default(""),
});

export type ContactInput = z.infer<typeof contactInputSchema>;
