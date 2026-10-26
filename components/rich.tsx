import { Fragment } from "react";
import { splitMarkers, stripGst } from "@/lib/text";

export function Rich({ text }: { text: string }) {
  const parts = splitMarkers(stripGst(text));

  return (
    <>
      {parts.map((part, index) =>
        part.marker ? (
          <span key={index} className="copy-slot">
            {part.text}
          </span>
        ) : (
          <Fragment key={index}>{part.text}</Fragment>
        ),
      )}
    </>
  );
}
