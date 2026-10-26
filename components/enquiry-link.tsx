"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { track } from "@/lib/analytics";
import { enquiryHref } from "@/lib/site";

export function EnquiryLink({
  className,
  children,
  location,
  href,
}: {
  className?: string;
  children: ReactNode;
  location: string;
  href?: string;
}) {
  const pathname = usePathname();
  const target = href ?? enquiryHref(pathname);

  return (
    <Link href={target} className={className} onClick={() => track("enquiry_click", { location })}>
      {children}
    </Link>
  );
}
