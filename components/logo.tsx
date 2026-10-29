import Image from "next/image";

const sources = {
  light: "/brand/roadmap-labs-black.svg",
  dark: "/brand/roadmap-labs-white.svg",
} as const;

export function Logo({
  tone = "light",
  variant = "header",
  priority = false,
}: {
  tone?: "light" | "dark";
  variant?: "header" | "footer";
  priority?: boolean;
}) {
  return (
    <Image
      className={variant === "footer" ? "logo logo-footer" : "logo logo-header"}
      src={sources[tone]}
      alt="Roadmap Labs"
      width={1206}
      height={364}
      priority={priority}
      unoptimized
    />
  );
}
