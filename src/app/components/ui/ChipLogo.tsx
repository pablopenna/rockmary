import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

interface ChipLogoProps {
  src?: string;
}

// Decorative logo shown before a chip's label; the label already names the item.
export default function ChipLogo({ src }: ChipLogoProps) {
  if (!src) return null;
  return (
    <span aria-hidden="true" className="-my-0.5 -ml-1.5 mr-2 flex size-6 flex-none items-center justify-center rounded-full bg-white p-1">
      <Image src={withBasePath(src)} alt="" width={16} height={16} className="size-full object-contain" />
    </span>
  );
}
