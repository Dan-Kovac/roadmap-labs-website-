import Image from "next/image";

type LogoProps = {
  variant?: "header" | "footer";
};

export function Logo({ variant = "header" }: LogoProps) {
  return (
    <Image
      className={variant === "header" ? "logo logo-header" : "logo logo-footer"}
      src="/brand/roadmap-labs-primary-horizontal-blue-dmsans.svg"
      alt="Roadmap Labs"
      width={1206}
      height={364}
      unoptimized
      priority={variant === "header"}
    />
  );
}
