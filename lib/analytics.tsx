"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { gaId } from "@/lib/site";

export function track(name: string, params?: Record<string, string>) {
  if (!gaId()) {
    return;
  }

  sendGAEvent("event", name, params ?? {});
}
