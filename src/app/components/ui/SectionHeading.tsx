import { ReactNode } from "react";
import { cx } from "./cx";

export type SectionTone = "light" | "dark";
export type SectionHeadingSize = "md" | "lg" | "xl";

interface SectionHeadingProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  titleId?: string;
  intro?: ReactNode;
  aside?: ReactNode;
  tone?: SectionTone;
  size?: SectionHeadingSize;
  className?: string;
}

const titleSizes: Record<SectionHeadingSize, string> = {
  md: "text-[clamp(34px,4vw,52px)] leading-[1.05] tracking-[-0.03em]",
  lg: "text-[clamp(36px,4.6vw,60px)] leading-[1.02] tracking-[-0.035em]",
  xl: "text-[clamp(36px,5vw,64px)] leading-none tracking-[-0.035em]",
};

export function eyebrowClasses(tone: SectionTone = "light") {
  return cx(
    "font-mono text-[13px] font-medium uppercase tracking-[0.08em]",
    tone === "dark" ? "text-blush" : "text-chocolate-plum"
  );
}

export function sectionTitleClasses(size: SectionHeadingSize = "md") {
  return cx("m-0 font-display font-bold", titleSizes[size]);
}

export default function SectionHeading({
  eyebrow,
  title,
  titleId,
  intro,
  aside,
  tone = "light",
  size = "md",
  className,
}: SectionHeadingProps) {
  const hasSide = intro !== undefined || aside !== undefined;

  return (
    <div className={cx("flex flex-wrap items-end justify-between gap-6", className)}>
      <div
        className={cx(
          "flex min-w-0 flex-col gap-3",
          hasSide ? (size === "lg" ? "flex-[1_1_520px]" : "flex-[1_1_480px]") : "w-full"
        )}
      >
        {eyebrow && <span className={eyebrowClasses(tone)}>{eyebrow}</span>}
        <h2 id={titleId} className={sectionTitleClasses(size)}>
          {title}
        </h2>
      </div>
      {intro !== undefined && (
        <p
          className={cx(
            "m-0 min-w-0 text-[18px]",
            size === "lg" ? "flex-[0_1_400px]" : "flex-[0_1_380px]",
            tone === "dark" ? "text-silver" : "text-contrast-two"
          )}
        >
          {intro}
        </p>
      )}
      {aside}
    </div>
  );
}
