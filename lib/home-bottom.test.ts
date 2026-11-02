import { describe, expect, it } from "vitest";
import { feeRows, feeTerms, homeWork, runLoop, runRows, words } from "@/lib/home-bottom";

describe("home bottom copy", () => {
  it("keeps the fee terms verbatim and six comparison rows", () => {
    expect(feeTerms).toBe("No GST. No contract.");
    expect(feeTerms).not.toContain("AI model costs included");
    expect(feeTerms).not.toContain("incl. GST");
    expect(feeRows).toHaveLength(6);
    for (const row of feeRows) {
      expect(words(row.yourself).length).toBeLessThanOrEqual(8);
      expect(words(row.us).length).toBeLessThanOrEqual(8);
    }
  });

  it("links the three work cards and lists five run rows", () => {
    expect(homeWork.map((card) => card.href)).toEqual([
      "/projects/compass-buyers-agency",
      "/projects/review-buddy",
      "/projects/flexfolio",
    ]);
    expect(runRows).toHaveLength(5);
    expect(runRows.map((row) => row.name)).toEqual([
      "Ticket to preview",
      "Tested, then signed off",
      "A team per product",
      "AI help with clients",
      "Interview to article",
    ]);
    expect(runLoop.map((step) => step.label)).toEqual([
      "Idea",
      "Ticket",
      "Agent",
      "Preview",
      "QA",
      "Dan's approval",
      "Live",
    ]);
  });

  it("does not invent results or an insights row", () => {
    const text = JSON.stringify({ feeRows, runRows, homeWork });
    expect(text).not.toMatch(/\d+%|\b\d{2,}\s+(clients|reviews|users)\b/i);
    expect(text).not.toContain("Notes from building with AI, written up as we go");
  });
});