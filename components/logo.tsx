import Image from "next/image";

type LogoProps = {
  variant?: "header" | "footer";
};

const sizes = {
  header: { width: 148, height: 129, className: "logo logo-header" },
  footer: { width: 104, height: 91, className: "logo logo-footer" },
} as const;

export function Logo({ variant = "header" }: LogoProps) {
  const size = sizes[variant];

  return (
    <Image
      className={size.className}
      src="/brand/rl-plate-cream.png"
      alt="Roadmap Labs"
      width={size.width}
      height={size.height}
      priority={variant === "header"}
    />
  );
}
