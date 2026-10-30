"use client"

import { useEffect, useState } from "react";
import { getTranslation, Locale } from "@/app/i18n";
import { ArrowUpIcon } from "./ui";

interface BackToTopProps {
  locale: Locale
}

export default function BackToTop({ locale }: BackToTopProps) {
  const [visible, setVisible] = useState(false);
  const t = getTranslation.bind(null, locale);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    // The button unmounts at the top; move keyboard focus there too instead of dropping it to <body>.
    document.getElementById("main")?.focus({ preventScroll: true });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t('COMMON_BACK_TO_TOP')}
      title={t('COMMON_BACK_TO_TOP')}
      className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-chocolate-plum text-white shadow-lg transition-colors hover:bg-aux-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chocolate-plum focus-visible:ring-2 focus-visible:ring-white"
    >
      <ArrowUpIcon />
    </button>
  );
}
