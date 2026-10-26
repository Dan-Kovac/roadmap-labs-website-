"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { track } from "@/lib/analytics";

function ReturnTracker() {
  const params = useSearchParams();

  useEffect(() => {
    if (params.get("booked") === "1") {
      track("booking_complete", { location: "thank-you" });
    }
  }, [params]);

  return null;
}

export function BookingReturn() {
  return (
    <Suspense fallback={null}>
      <ReturnTracker />
    </Suspense>
  );
}
