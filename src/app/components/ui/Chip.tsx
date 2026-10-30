import { ReactNode } from "react";
import { cx } from "./cx";

export type ChipVariant = "solid" | "outline" | "onDark" | "onDarkDashed" | "light" | "tag";
export type ChipSize = "sm" | "md";

interface ChipProps {
  children: ReactNode;
  variant?: ChipVariant;
  size?: ChipSize;
  as?: "span" | "li";
  className?: string;
}

const variants: Record<ChipVariant, string> = {
  solid: "bg-contrast text-white font-medium",
  outline: "border-[1.5px] border-contrast-three",
  onDark: "bg-white/10 text-white font-medium",
  onDarkDashed: "border border-dashed border-white/25 text-base",
  light: "bg-base-three font-medium",
  tag: "bg-base-three text-aux-2 font-mono font-medium",
};

const paddings: Record<ChipSize, string> = {
  sm: "px-3 py-1.5",
  md: "px-3.5 py-2",
};

const textSizes: Record<ChipSize, string> = {
  sm: "text-[14px]",
  md: "text-[15px]",
};

export default function Chip({ children, variant = "solid", size = "sm", as: Tag = "span", className }: ChipProps) {
  return (
    <Tag
      className={cx(
        "inline-flex max-w-full items-center rounded-full break-words",
        paddings[size],
        variant === "tag" ? "text-[12px]" : textSizes[size],
        variants[variant],
        className
      )}
    >
      {children}
    </Tag>
  );
}
