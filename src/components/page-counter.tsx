"use client";

import { FaEye as Eye } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";

function CircularLoader() {
  return (
    <div className="h-4 w-4 animate-spin rounded-full border-2 border-t-transparent border-white"></div>
  );
}

export default function ViewsCounter() {
  const t = useTranslations("landing");

  const { data: views, isLoading } = useQuery({
    queryKey: ["page-views"],
    queryFn: async () => {
      const res = await fetch("/api/views");
      const data = await res.json();
      return data.views[0].views || 0;
    },
  });

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`flex items-center gap-2 rounded-md border border-custom_purple/20
	      bg-transparent px-4 py-2 text-sm backdrop-blur-sm
	      transition-transform hover:scale-105`}
      >
        <Eye className="h-4 w-4 text-custom_purple" />
        <span className="font-mono text-white">
          {isLoading ? <CircularLoader /> : views.toLocaleString()}
        </span>
        <span className="text-xs text-[#FF8B8B]">{t("views")}</span>
      </div>
    </div>
  );
}
