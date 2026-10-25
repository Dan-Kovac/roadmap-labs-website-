import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Shot = {
  label: string;
  alt: string;
  crop: "wide" | "tall";
  src?: string;
  placeholder?: string;
};

export type WorkDoc = {
  slug: string;
  title: string;
  job: string;
  dek: string;
  role: string;
  order: number;
  home: boolean;
  thesis: string[];
  liveUrl?: string;
  liveLabel?: string;
  privateNote?: string;
  result: string;
  testimonial: string;
  shots: Shot[];
  body: string;
};

export type InsightDoc = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  order: number;
  /** Substack URL when the note is also published there. Empty until Dan sets it. */
  canonical: string;
  body: string;
};

function readDir(folder: "work" | "insights") {
  const absolute =
    folder === "work"
      ? path.join(process.cwd(), "content/work")
      : path.join(process.cwd(), "content/insights");

  return fs
    .readdirSync(absolute)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(absolute, file), "utf8");
      const parsed = matter(raw);

      return { file, data: parsed.data, body: parsed.content.trim() };
    });
}

function asString(value: unknown, fallback = "") {
  return typeof value === "string" ? value.trim() : fallback;
}

function asLines(value: unknown) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function asShots(value: unknown, file: string): Shot[] {
  if (!Array.isArray(value)) {
    throw new Error(`${file} needs a shots list`);
  }

  return value.map((shot) => {
    const record = shot as Record<string, unknown>;
    const crop = record.crop === "tall" ? "tall" : "wide";

    return {
      label: asString(record.label, "Screen"),
      alt: asString(record.alt, asString(record.label, "Screen")),
      crop,
      src: asString(record.src) || undefined,
      placeholder: asString(record.placeholder) || undefined,
    };
  });
}

function requireString(value: unknown, file: string, field: string) {
  const text = asString(value);

  if (!text) {
    throw new Error(`${file} is missing ${field}`);
  }

  return text;
}

let workCache: WorkDoc[] | undefined;
let insightCache: InsightDoc[] | undefined;

export function getWork() {
  if (process.env.NODE_ENV === "production" && workCache) {
    return workCache;
  }

  workCache = readDir("work")
    .map(({ file, data, body }) => ({
      slug: requireString(data.slug, file, "slug"),
      title: requireString(data.title, file, "title"),
      job: requireString(data.job, file, "job"),
      dek: requireString(data.dek, file, "dek"),
      role: asString(data.role, "Work"),
      order: typeof data.order === "number" ? data.order : 99,
      home: data.home === true,
      thesis: asLines(data.thesis),
      liveUrl: asString(data.liveUrl) || undefined,
      liveLabel: asString(data.liveLabel) || undefined,
      privateNote: asString(data.privateNote) || undefined,
      result: asString(data.result, "[RESULT TBC]"),
      testimonial: asString(data.testimonial, "[TESTIMONIAL TBC]"),
      shots: asShots(data.shots, file),
      body,
    }))
    .sort((a, b) => a.order - b.order);

  return workCache;
}

export function getHomeWork() {
  return getWork().filter((project) => project.home);
}

export function findWork(slug: string) {
  return getWork().find((project) => project.slug === slug);
}

export function getInsights() {
  if (process.env.NODE_ENV === "production" && insightCache) {
    return insightCache;
  }

  insightCache = readDir("insights")
    .map(({ file, data, body }) => ({
      slug: requireString(data.slug, file, "slug"),
      title: requireString(data.title, file, "title"),
      dek: requireString(data.dek, file, "dek"),
      date: asString(data.date, "[DATE TBC]"),
      order: typeof data.order === "number" ? data.order : 99,
      canonical: asString(data.canonical),
      body,
    }))
    .sort((a, b) => a.order - b.order);

  return insightCache;
}

export function findInsight(slug: string) {
  return getInsights().find((article) => article.slug === slug);
}
