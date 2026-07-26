import "dotenv/config";
import { PrismaClient } from "../generated/prisma";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { projects, skillCategories, timelineEvents } from "../data/portfolio";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./prisma/dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: {
        title: project.title,
        category: project.category,
        description: project.description,
        longDescription: project.longDescription,
        stack: JSON.stringify(project.stack),
        status: project.status,
        liveUrl: project.liveUrl,
        githubUrl: project.githubUrl,
        accent: project.accent,
        artifactNo: project.artifactNo,
        highlights: JSON.stringify(project.highlights),
      },
      create: {
        slug: project.slug,
        title: project.title,
        category: project.category,
        description: project.description,
        longDescription: project.longDescription,
        stack: JSON.stringify(project.stack),
        status: project.status,
        liveUrl: project.liveUrl,
        githubUrl: project.githubUrl,
        accent: project.accent,
        artifactNo: project.artifactNo,
        highlights: JSON.stringify(project.highlights),
      },
    });
  }

  for (const category of skillCategories) {
    await prisma.skill.upsert({
      where: { title: category.title },
      update: {
        category: category.title,
        mastery: category.mastery,
        description: category.description,
        skills: JSON.stringify(category.skills),
      },
      create: {
        title: category.title,
        category: category.title,
        mastery: category.mastery,
        description: category.description,
        skills: JSON.stringify(category.skills),
      },
    });
  }

  for (const [index, event] of timelineEvents.entries()) {
    await prisma.timelineEvent.upsert({
      where: { id: `timeline-${index + 1}` },
      update: {
        year: event.year,
        title: event.title,
        description: event.description,
        sortOrder: index + 1,
      },
      create: {
        id: `timeline-${index + 1}`,
        year: event.year,
        title: event.title,
        description: event.description,
        sortOrder: index + 1,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
