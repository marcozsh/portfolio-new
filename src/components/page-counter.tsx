"use client";

import { useEffect, useState } from "react";
import { FaEye as Eye } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function ViewsCounter() {
  const [views, setViews] = useState(0);
  const t = useTranslations("landing");

  useEffect(() => {
    // Simulate fetching view count
    // Replace with actual API call
    setViews(Math.floor(Math.random() * 1000));
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex items-center gap-2 rounded-md border border-[#FF8B8B]/20 bg-[#0A0B14]/90 px-4 py-2 text-sm backdrop-blur-sm transition-transform hover:scale-105">
        <Eye className="h-4 w-4 text-[#FF8B8B]" />
        <span className="font-mono text-white">{views.toLocaleString()}</span>
        <span className="text-xs text-[#FF8B8B]">{t("views")}</span>
      </div>
    </div>
  );
}
