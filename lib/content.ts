import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { categories, pageSize, type CategorySlug } from "@/lib/copy";
import { showGated } from "@/lib/gates";
import { isTbc, readingMinutes, stripGst } from "@/lib/text";

export type Shot = {
  label: string;
  alt: string;
  crop: "wide" | "tall";
  src?: string;
  placeholder?: string;
  caption?: string;
  place?: "hero" | "seo" | "conversion" | "about" | "built";
  frame?: "laptop" | "phone";
};

export type WorkDoc = {
  slug: string;
  title: string;
  name?: string;
  job: string;
  dek: string;
  role: string;
  order: number;
  home: boolean;
  thesis: string[];
  liveUrl?: string;
  liveLabel?: string;
  liveNote?: string;
  privateNote?: string;
  client?: string;
  builtWith?: string;
  year?: string;
  status?: string;
  services?: string;
  permission: "public" | "pending";
  publish: boolean;
  indexable: boolean;
  seoTitle: string;
  seoDescription: string;
  date?: string;
  shots: Shot[];
  body: string;
  about?: { name: string; url?: string };
};

export type InsightDoc = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  updated?: string;
  order: number;
  category: CategorySlug;
  featured: boolean;
  draft: boolean;
  tags: string[];
  heroImage?: { src: string; alt: string; caption?: string };
  author: string;
  related: string[];
  seoTitle: string;
  seoDescription: string;
  body: string;
  readingTime: number;
};

function readFolder(name: "work" | "insights", extension: ".md" | ".mdx") {
  const absolute = path.join(process.cwd(), "content", name);

  if (!fs.existsSync(absolute)) {
    return [];
  }

  return fs
    .readdirSync(absolute)
    .filter((file) => file.endsWith(extension))
    .map((file) => {
      const raw = fs.readFileSync(path.join(absolute, file), "utf8");
      const parsed = matter(raw);

      return { file, data: parsed.data, body: parsed.content.trim() };
    });
}

function asString(value: unknown, fallback = "") {
  return typeof value === "string" ? value.trim() : fallback;
}

function asDate(value: unknown, fallback = "[DATE TBC]") {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  return asString(value, fallback);
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

function asShots(value: unknown): Shot[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.map((shot) => {
    const record = shot as Record<string, unknown>;

    return {
      label: asString(record.label, "Screen"),
      alt: asString(record.alt, asString(record.label, "Screen")),
      crop: record.crop === "tall" ? "tall" : "wide",
      src: asString(record.src) || undefined,
      placeholder: asString(record.placeholder) || undefined,
      caption: asString(record.caption) || undefined,
      place:
        record.place === "hero" ||
        record.place === "seo" ||
        record.place === "conversion" ||
        record.place === "about" ||
        record.place === "built"
          ? record.place
          : undefined,
      frame: record.frame === "laptop" || record.frame === "phone" ? record.frame : undefined,
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

  workCache = readFolder("work", ".md")
    .map(({ file, data, body }) => {
      const permission = data.permission === "pending" ? "pending" : "public";
      const publish = data.publish !== false;

      const liveUrl = asString(data.liveUrl);
      const safeLiveUrl = /reviewbuddy\.com\.au/i.test(liveUrl) ? "" : liveUrl;

      return {
        slug: requireString(data.slug, file, "slug"),
        title: requireString(data.title, file, "title"),
        name: asString(data.name) || undefined,
        job: requireString(data.job, file, "job"),
        dek: stripGst(requireString(data.dek, file, "dek")),
        role: asString(data.role, "Work"),
        order: typeof data.order === "number" ? data.order : 99,
        home: data.home !== false,
        thesis: asLines(data.thesis),
        liveUrl: safeLiveUrl || undefined,
        liveLabel: safeLiveUrl ? asString(data.liveLabel) || undefined : undefined,
        liveNote: asString(data.liveNote) || undefined,
        privateNote: asString(data.privateNote) || undefined,
        client: asString(data.client) || undefined,
        builtWith: asString(data.builtWith) || undefined,
        year: asString(data.year) || undefined,
        status: asString(data.status) || undefined,
        services: asString(data.services) || undefined,
        permission,
        publish,
        indexable: publish && permission !== "pending" && data.indexable !== false && data.private !== true,
        seoTitle: requireString(data.seoTitle, file, "seoTitle"),
        seoDescription: stripGst(requireString(data.seoDescription, file, "seoDescription")),
        date: asString(data.date) || undefined,
        shots: asShots(data.shots),
        body: stripGst(body),
        about: data.aboutName
          ? { name: asString(data.aboutName), url: asString(data.aboutUrl) || undefined }
          : undefined,
      } satisfies WorkDoc;
    })
    .sort((a, b) => a.order - b.order);

  return workCache;
}

export function isListedWork(project: WorkDoc, env = process.env.VERCEL_ENV) {
  return showGated(project.publish, env);
}

export function getListedWork(env = process.env.VERCEL_ENV) {
  return getWork().filter((project) => isListedWork(project, env));
}

export function findWork(slug: string) {
  return getWork().find((project) => project.slug === slug);
}

export function nextWork(slug: string, env = process.env.VERCEL_ENV) {
  const work = getListedWork(env);
  const index = work.findIndex((project) => project.slug === slug);

  if (index < 0) {
    return undefined;
  }

  return work[(index + 1) % work.length];
}

function asCategory(value: unknown, file: string): CategorySlug {
  const text = asString(value);
  const match = categories.find((item) => item.slug === text || item.name.toLowerCase() === text.toLowerCase());

  if (!match) {
    throw new Error(`${file} category must be one of ${categories.map((item) => item.name).join(", ")}`);
  }

  return match.slug;
}

export function getInsights() {
  if (process.env.NODE_ENV === "production" && insightCache) {
    return insightCache;
  }

  insightCache = readFolder("insights", ".mdx")
    .map(({ file, data, body }) => {
      const date = asDate(data.date);
      const draft = data.draft === true || isTbc(date);

      return {
        slug: requireString(data.slug, file, "slug"),
        title: requireString(data.title, file, "title"),
        dek: stripGst(requireString(data.dek, file, "dek")),
        date,
        updated: asString(data.updated) || undefined,
        order: typeof data.order === "number" ? data.order : 99,
        category: asCategory(data.category, file),
        featured: data.featured === true,
        draft,
        tags: asLines(data.tags),
        heroImage:
          data.heroImage && typeof data.heroImage === "object"
            ? {
                src: asString((data.heroImage as { src?: string }).src),
                alt: asString((data.heroImage as { alt?: string }).alt),
                caption: asString((data.heroImage as { caption?: string }).caption) || undefined,
              }
            : undefined,
        author: asString(data.author, "dan-kovac"),
        related: asLines(data.related).slice(0, 3),
        seoTitle: asString(data.seoTitle) || requireString(data.title, file, "title"),
        seoDescription: stripGst(
          asString(data.seoDescription) || asString(data.description) || requireString(data.dek, file, "dek"),
        ),
        body: stripGst(body),
        readingTime: readingMinutes(body),
      } satisfies InsightDoc;
    })
    .sort((a, b) => a.order - b.order || b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));

  return insightCache;
}

export function getLiveInsights() {
  return getInsights().filter((article) => !article.draft);
}

export function findInsight(slug: string) {
  return getInsights().find((article) => article.slug === slug);
}

export function homeInsightsVisible(count = getLiveInsights().length) {
  return count >= 3;
}

export function insightPages(items: InsightDoc[]) {
  return Math.max(1, Math.ceil(items.length / pageSize));
}

export function pageOf(items: InsightDoc[], page: number) {
  const start = (page - 1) * pageSize;

  return items.slice(start, start + pageSize);
}

export function categoriesInUse(items = getLiveInsights()) {
  const slugs = new Set(items.map((article) => article.category));

  return categories.filter((category) => slugs.has(category.slug));
}

export function showInsightFilters(items = getLiveInsights()) {
  return categoriesInUse(items).length >= 2;
}

export function categoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function relatedInsights(article: InsightDoc) {
  const live = getLiveInsights().filter((item) => item.slug !== article.slug);
  const picked = article.related
    .map((slug) => live.find((item) => item.slug === slug))
    .filter((item): item is InsightDoc => Boolean(item));

  if (picked.length) {
    return picked.slice(0, 3);
  }

  return live.filter((item) => item.category === article.category).slice(0, 3);
}

export function isoDate(value?: string) {
  return value && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : undefined;
}
