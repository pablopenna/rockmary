import { SVGProps } from "react";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
  size?: number;
};

interface BaseIconProps extends IconProps {
  defaultSize: number;
  defaultStrokeWidth: number;
  width?: number;
  height?: number;
}

function BaseIcon({
  size,
  defaultSize,
  defaultStrokeWidth,
  width,
  height,
  viewBox = "0 0 24 24",
  strokeWidth,
  children,
  ...props
}: BaseIconProps) {
  return (
    <svg
      width={width ?? size ?? defaultSize}
      height={height ?? size ?? defaultSize}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth ?? defaultStrokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <BaseIcon defaultSize={18} defaultStrokeWidth={2} {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </BaseIcon>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <BaseIcon defaultSize={24} defaultStrokeWidth={1.8} {...props}>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />
    </BaseIcon>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <BaseIcon defaultSize={24} defaultStrokeWidth={1.8} {...props}>
      <path d="M8 7l-5 5 5 5" />
      <path d="M16 7l5 5-5 5" />
      <path d="M14 4l-4 16" />
    </BaseIcon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <BaseIcon defaultSize={20} defaultStrokeWidth={2} {...props}>
      <path d="M5 12l5 5L20 7" />
    </BaseIcon>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <BaseIcon defaultSize={28} defaultStrokeWidth={1.8} {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />
    </BaseIcon>
  );
}

export function BlocksIcon(props: IconProps) {
  return (
    <BaseIcon defaultSize={28} defaultStrokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <path d="M17.5 14v7" />
      <path d="M14 17.5h7" />
    </BaseIcon>
  );
}

export function UserPlusIcon(props: IconProps) {
  return (
    <BaseIcon defaultSize={28} defaultStrokeWidth={1.8} {...props}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M17 8v6" />
      <path d="M14 11h6" />
    </BaseIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <BaseIcon defaultSize={18} defaultStrokeWidth={2} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </BaseIcon>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <BaseIcon defaultSize={18} defaultStrokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7" />
      <path d="M8 7v.01" />
      <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
      <path d="M12 10v7" />
    </BaseIcon>
  );
}

export function LongArrowIcon({ size, ...props }: IconProps) {
  const width = size ?? 40;
  return (
    <BaseIcon
      defaultSize={40}
      defaultStrokeWidth={2.2}
      viewBox="0 0 40 24"
      width={width}
      height={(width * 24) / 40}
      {...props}
    >
      <path d="M2 12h34" />
      <path d="M28 5l8 7-8 7" />
    </BaseIcon>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <BaseIcon defaultSize={24} defaultStrokeWidth={2} {...props}>
      <path d="M15 18l-6-6 6-6" />
    </BaseIcon>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <BaseIcon defaultSize={24} defaultStrokeWidth={2} {...props}>
      <path d="M9 18l6-6-6-6" />
    </BaseIcon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <BaseIcon defaultSize={24} defaultStrokeWidth={2} {...props}>
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </BaseIcon>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <BaseIcon defaultSize={20} defaultStrokeWidth={2} {...props}>
      <path d="M12 19V5" />
      <path d="M5 12l7-7 7 7" />
    </BaseIcon>
  );
}
