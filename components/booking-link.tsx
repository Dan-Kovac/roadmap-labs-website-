import type { ReactNode } from "react";
import Link from "next/link";
import { bookingHref } from "@/lib/site";

export function BookingLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const href = bookingHref();

  if (href.startsWith("/")) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <a className={className} href={href} rel="noreferrer">
      {children}
    </a>
  );
}
