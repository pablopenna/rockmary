import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cx } from "./cx";

export type ButtonVariant = "accent" | "outline" | "dark" | "outlineOnDark";
export type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  accent: "bg-chocolate-plum text-white hover:bg-aux-2",
  outline: "border-[1.5px] border-contrast text-contrast hover:bg-contrast hover:text-white",
  dark: "bg-contrast text-white hover:bg-contrast-four",
  outlineOnDark: "border-[1.5px] border-white/25 text-white hover:border-white hover:bg-white/10",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-11 px-5 py-[11px] text-[15px] font-medium",
  md: "min-h-13 px-6.5 py-[15px] font-semibold",
  lg: "min-h-[54px] px-5 py-[15px] font-semibold sm:px-6.5",
};

interface ButtonClassOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: "light" | "dark";
  className?: string;
}

export function buttonClasses({ variant = "accent", size = "md", tone = "light", className }: ButtonClassOptions = {}) {
  return cx(
    "inline-flex max-w-full items-center gap-2.5 rounded-full leading-snug no-underline transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    tone === "dark" ? "focus-visible:outline-blush" : "focus-visible:outline-chocolate-plum",
    variants[variant],
    sizes[size],
    className
  );
}

type ButtonLinkProps = Omit<ComponentPropsWithoutRef<"a">, "className"> &
  ButtonClassOptions & {
    href: string;
    icon?: ReactNode;
    iconPosition?: "start" | "end";
    external?: boolean;
  };

export default function ButtonLink({
  variant,
  size,
  tone,
  className,
  icon,
  iconPosition = "end",
  external = false,
  children,
  ...props
}: ButtonLinkProps) {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <a className={buttonClasses({ variant, size, tone, className })} {...externalProps} {...props}>
      {icon && iconPosition === "start" && icon}
      <span className="min-w-0 [overflow-wrap:anywhere]">{children}</span>
      {icon && iconPosition === "end" && icon}
    </a>
  );
}
