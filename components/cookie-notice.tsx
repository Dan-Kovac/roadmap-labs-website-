"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { privacyCopy } from "@/lib/copy";
import { visibleCopy } from "@/lib/text";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function dismissed() {
  return window.localStorage.getItem("rl-cookie") === "1";
}

function dismiss() {
  window.localStorage.setItem("rl-cookie", "1");
  listeners.forEach((listener) => listener());
}

export function CookieNotice() {
  const hidden = useSyncExternalStore(subscribe, dismissed, () => true);

  if (hidden) {
    return null;
  }

  return (
    <div className="cookie">
      <div className="rl-container cookie-bar">
        <p>
          Analytics stays off until it is switched on.{" "}
          {visibleCopy(privacyCopy.consent) ? <span className="copy-slot">{visibleCopy(privacyCopy.consent)} </span> : null}
          <Link href="/privacy">Privacy</Link>
        </p>
        <button
          className="rl-btn rl-btn-secondary rl-btn-sm"
          type="button"
          onClick={dismiss}
        >
          OK
        </button>
      </div>
    </div>
  );
}
