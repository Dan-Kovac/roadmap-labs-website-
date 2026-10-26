"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/analytics";
import { bookingHref } from "@/lib/site";

export function BookingLink({
  className,
  children,
  location,
}: {
  className?: string;
  children: ReactNode;
  location: string;
}) {
  const href = bookingHref();
  const external = href.startsWith("http");

  return (
    <a
      className={className}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      onClick={() => track("book_call_click", { location })}
    >
      {children}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}
