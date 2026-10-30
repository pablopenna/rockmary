import { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./cx";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  as?: ElementType;
};

// 1200px content + 2×24px padding (the mockup's max-width excludes padding)
export default function Container({ as: Tag = "div", className, ...props }: ContainerProps) {
  return <Tag className={cx("mx-auto w-full max-w-[1248px] px-6", className)} {...props} />;
}
