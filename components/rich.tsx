import { visibleCopy } from "@/lib/text";

export function Rich({ text }: { text: string }) {
  const clean = visibleCopy(text);

  if (!clean) {
    return null;
  }

  return <>{clean}</>;
}
