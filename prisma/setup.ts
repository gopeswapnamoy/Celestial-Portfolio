import "dotenv/config";
import Database from "better-sqlite3";
import { dirname, resolve } from "node:path";
import { mkdirSync } from "node:fs";

function getDatabasePath() {
  const url = process.env.DATABASE_URL ?? "file:./prisma/dev.db";
  if (!url.startsWith("file:")) {
    throw new Error("Local setup currently supports SQLite file: URLs only.");
  }

  const rawPath = url.replace(/^file:/, "");
  return resolve(process.cwd(), rawPath);
}

const databasePath = getDatabasePath();
mkdirSync(dirname(databasePath), { recursive: true });

const db = new Database(databasePath);

db.exec(`
PRAGMA journal_mode = WAL;

CREATE TABLE IF NOT EXISTS "Project" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "slug" TEXT NOT NULL UNIQUE,
  "title" TEXT NOT NULL,
  "category" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "longDescription" TEXT NOT NULL,
  "stack" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "liveUrl" TEXT NOT NULL,
  "githubUrl" TEXT NOT NULL,
  "accent" TEXT NOT NULL,
  "artifactNo" TEXT NOT NULL,
  "highlights" TEXT NOT NULL,
  "featured" INTEGER NOT NULL DEFAULT 1,
  "createdAt" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "Skill" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "title" TEXT NOT NULL UNIQUE,
  "category" TEXT NOT NULL,
  "mastery" INTEGER NOT NULL,
  "description" TEXT NOT NULL,
  "skills" TEXT NOT NULL,
  "createdAt" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "ContactMessage" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "subject" TEXT NOT NULL,
  "message" TEXT NOT NULL,
  "ipHash" TEXT,
  "userAgent" TEXT,
  "createdAt" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "readAt" TEXT
);

CREATE INDEX IF NOT EXISTS "ContactMessage_createdAt_idx" ON "ContactMessage"("createdAt");
CREATE INDEX IF NOT EXISTS "ContactMessage_email_idx" ON "ContactMessage"("email");

CREATE TABLE IF NOT EXISTS "TimelineEvent" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "year" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "sortOrder" INTEGER NOT NULL,
  "createdAt" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
`);

db.close();
console.log(`SQLite schema ready at ${databasePath}`);
