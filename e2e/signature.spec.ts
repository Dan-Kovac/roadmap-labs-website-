import { expect, test } from "@playwright/test";

test("email signature PNG is served at a stable URL", async ({ request }) => {
  const response = await request.get("/brand/roadmap-labs-email-signature-black.png", {
    maxRedirects: 0,
  });

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"] ?? "").toContain("image/png");

  const body = await response.body();
  expect(body.subarray(0, 8).toString("hex")).toBe("89504e470d0a1a0a");
  expect(body.length).toBeGreaterThan(8);
});
