import type { ReactNode } from "react";
import { splitMarkers } from "@/lib/text";

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

function safeHref(href: string) {
  if (
    href.startsWith("/") ||
    href.startsWith("mailto:") ||
    href.startsWith("https://") ||
    href.startsWith("http://")
  ) {
    return href;
  }

  return undefined;
}

function marked(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];

  splitMarkers(text).forEach((part, index) => {
    if (part.marker) {
      nodes.push(
        <span key={`${keyPrefix}-slot-${index}`} className="copy-slot">
          {part.text}
        </span>,
      );
      return;
    }

    nodes.push(...inline(part.text, `${keyPrefix}-${index}`));
  });

  return nodes;
}

function inline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let last = 0;
  let index = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text))) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }

    const key = `${keyPrefix}-${index++}`;

    if (match[1] && match[2]) {
      const href = safeHref(match[2]);

      if (href) {
        const external = href.startsWith("http");

        nodes.push(
          <a key={key} href={href} {...(external ? { rel: "noreferrer" } : {})}>
            {match[1]}
          </a>,
        );
      } else {
        nodes.push(match[1]);
      }
    } else if (match[3]) {
      nodes.push(<strong key={key}>{match[3]}</strong>);
    } else if (match[4]) {
      nodes.push(<em key={key}>{match[4]}</em>);
    }

    last = match.index + match[0].length;
  }

  if (last < text.length) {
    nodes.push(text.slice(last));
  }

  return nodes;
}

function parseBlocks(source: string): Block[] {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index] ?? "";
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith("### ")) {
      blocks.push({ type: "h3", text: trimmed.slice(4).trim() });
      index += 1;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      blocks.push({ type: "h2", text: trimmed.slice(3).trim() });
      index += 1;
      continue;
    }

    if (trimmed.startsWith("> ")) {
      const quote: string[] = [];

      while (index < lines.length && (lines[index] ?? "").trim().startsWith("> ")) {
        quote.push((lines[index] ?? "").trim().slice(2));
        index += 1;
      }

      blocks.push({ type: "quote", text: quote.join(" ") });
      continue;
    }

    if (/^[-*] /.test(trimmed)) {
      const items: string[] = [];

      while (index < lines.length && /^[-*] /.test((lines[index] ?? "").trim())) {
        items.push((lines[index] ?? "").trim().slice(2).trim());
        index += 1;
      }

      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\. /.test(trimmed)) {
      const items: string[] = [];

      while (index < lines.length && /^\d+\. /.test((lines[index] ?? "").trim())) {
        items.push((lines[index] ?? "").trim().replace(/^\d+\. /, "").trim());
        index += 1;
      }

      blocks.push({ type: "ol", items });
      continue;
    }

    const paragraph: string[] = [trimmed];
    index += 1;

    while (index < lines.length && (lines[index] ?? "").trim()) {
      const next = (lines[index] ?? "").trim();

      if (
        next.startsWith("#") ||
        next.startsWith("> ") ||
        /^[-*] /.test(next) ||
        /^\d+\. /.test(next)
      ) {
        break;
      }

      paragraph.push(next);
      index += 1;
    }

    blocks.push({ type: "p", text: paragraph.join(" ") });
  }

  return blocks;
}

export function Markdown({ source }: { source: string }) {
  const blocks = parseBlocks(source);

  return (
    <>
      {blocks.map((block, index) => {
        const key = `block-${index}`;

        if (block.type === "h2") {
          return <h2 key={key}>{marked(block.text, key)}</h2>;
        }

        if (block.type === "h3") {
          return <h3 key={key}>{marked(block.text, key)}</h3>;
        }

        if (block.type === "quote") {
          return <blockquote key={key}>{marked(block.text, key)}</blockquote>;
        }

        if (block.type === "ul" || block.type === "ol") {
          const List = block.type === "ul" ? "ul" : "ol";

          return (
            <List key={key}>
              {block.items.map((item) => (
                <li key={item}>{marked(item, `${key}-${item}`)}</li>
              ))}
            </List>
          );
        }

        return <p key={key}>{marked(block.text, key)}</p>;
      })}
    </>
  );
}
