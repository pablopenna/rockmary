"use client";

import { useState, type CSSProperties, type MouseEvent } from "react";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";

// Hover the top-right corner and the page peels back. Starts disabled: the first click on the
// corner only arms it (no navigation, no reveal); after that it peels on hover and links through.
export default function PageCurl() {
  const [enabled, setEnabled] = useState(false);
  const style = { "--curl-image": `url(${withBasePath("/bw/bwi.png")})` } as CSSProperties;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!enabled) {
      event.preventDefault();
      setEnabled(true);
    }
  };

  return (
    <Link
      href="/brainworm"
      className={enabled ? "page-curl page-curl--enabled" : "page-curl"}
      style={style}
      aria-hidden="true"
      tabIndex={-1}
      onClick={handleClick}
    >
      <span className="page-curl__hit" />
    </Link>
  );
}
