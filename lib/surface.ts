import {
  aboutCopy,
  chrome,
  comparison,
  contactCopy,
  dan,
  faq,
  homeInsights,
  marketingPage,
  notFoundCopy,
  offer,
  privacyCopy,
  properly,
  putToWork,
  workIndex,
} from "@/lib/copy";
import { getInsights, getListedWork, homeInsightsVisible } from "@/lib/content";
import { findMarkers } from "@/lib/text";

export function visibleText(env = process.env.VERCEL_ENV) {
  const chunks = [
    chrome.skip,
    chrome.menuOpen,
    chrome.menuClose,
    chrome.banner,
    properly.lead,
    ...properly.blocks.map((block) => block.body),
    putToWork.title,
    putToWork.models,
    ...putToWork.cards.flatMap((card) => [card.body, card.caseLabel, card.capture]),
    ...offer.included,
    offer.priceLine,
    offer.footnote,
    ...offer.fine.map((item) => item.body),
    offer.notIncluded,
    offer.tax.marker,
    offer.tax.body,
    comparison.lead,
    comparison.footnote,
    ...comparison.rows.flatMap((row) => [row.team, row.us, row.why]),
    ...faq.map((item) => item.a),
    dan.lead,
    dan.bio,
    dan.portrait,
    ...dan.rows.map((row) => row.body),
    ...(homeInsightsVisible() ? [homeInsights.line1, homeInsights.line2] : []),
    ...workIndex.cards.map((card) => card.services),
    aboutCopy.lead,
    ...aboutCopy.body,
    ...aboutCopy.problems.map((problem) => problem.body),
    aboutCopy.photo,
    aboutCopy.sameAs,
    marketingPage.lead,
    ...marketingPage.sections.map((section) => section.body),
    marketingPage.proof.body,
    marketingPage.fee.footnote,
    ...marketingPage.heldQuestions.map((item) => `${item.q} ${item.a}`),
    ...marketingPage.questions.map((item) => item.a),
    notFoundCopy.line1,
    contactCopy.unconfiguredNote,
    privacyCopy.consent,
    privacyCopy.missing,
    ...getListedWork(env).flatMap((project) => [
      project.body,
      project.dek,
      project.year ?? "",
      project.liveNote ?? "",
      ...project.shots.map((shot) => shot.caption ?? ""),
    ]),
    ...getInsights()
      .filter((article) => env !== "production" || !article.draft)
      .flatMap((article) => [article.body, article.dek, article.date]),
  ];

  return chunks.join("\n");
}

export function productionMarkers(env = process.env.VERCEL_ENV) {
  return findMarkers(visibleText(env));
}

export function assertProductionClean(env = process.env.VERCEL_ENV) {
  if (env !== "production") {
    return;
  }

  const found = productionMarkers(env);

  if (found.length) {
    throw new Error(
      `Production build blocked. Unresolved copy or asset markers:\n${[...new Set(found)].join("\n")}`,
    );
  }
}
