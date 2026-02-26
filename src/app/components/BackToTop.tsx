"use client"

import { useEffect, useState } from "react";
import { getTranslation, Locale } from "@/app/i18n";

interface BackToTopProps {
  locale: Locale
}

export default function BackToTop({locale}: BackToTopProps) {
  const [visible, setVisible] = useState(false);
  const t = getTranslation.bind(null, locale);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-contrast-four text-base-two p-3 rounded-full shadow-lg hover:bg-contrast-three transition"
      aria-label="Scroll to top"
    >
      {t("BACK_TO_TOP")}
    </button>
  );
}
