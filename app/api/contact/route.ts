import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { contactInputSchema } from "@/server/contact-schema";
import { prisma } from "@/server/db";
import { env } from "@/server/env";
import { logger } from "@/server/logger";
import { consumeRateLimit } from "@/server/rate-limit";

export const runtime = "nodejs";

function getIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function hashIp(ip: string) {
  return createHash("sha256").update(ip).digest("hex").slice(0, 32);
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 12_000) {
    return NextResponse.json({ message: "Message is too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON payload." }, { status: 400 });
  }

  const parsed = contactInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: "Please check the form fields and try again." }, { status: 400 });
  }

  if (parsed.data.website.trim().length > 0) {
    logger.warn("honeypot contact submission ignored", { source: "honeypot" });
    return NextResponse.json({ message: "Message sealed." }, { status: 200 });
  }

  const ipHash = hashIp(getIp(request));
  const rateLimit = consumeRateLimit(ipHash, env.CONTACT_RATE_LIMIT_MAX, env.CONTACT_RATE_LIMIT_WINDOW_MS);
  if (!rateLimit.allowed) {
    logger.warn("contact rate limit exceeded", { ipHash });
    return NextResponse.json(
      { message: "The sanctuary is receiving too many messages. Please try again in a minute." },
      { status: 429 },
    );
  }

  try {
    await prisma.contactMessage.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        subject: parsed.data.subject,
        message: parsed.data.message,
        ipHash,
        userAgent: request.headers.get("user-agent")?.slice(0, 240) ?? null,
      },
    });

    logger.info("contact message stored", { ipHash, remaining: rateLimit.remaining });
    return NextResponse.json({ message: "Message sealed. I will read it with care." }, { status: 201 });
  } catch (error) {
    logger.error("contact message storage failed", {
      error: error instanceof Error ? error.name : "UnknownError",
    });
    return NextResponse.json({ message: "The archive could not store this message." }, { status: 500 });
  }
}
