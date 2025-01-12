"use client";

import { useEffect, useState } from "react";
import { FaEye as Eye } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function ViewsCounter() {
  const [views, setViews] = useState(0);
  const t = useTranslations("landing");

  useEffect(() => {
    const fetchViews = async () => {
      const res = await fetch("/api/views");
      const data = await res.json();
      console.log("data", data.views[0].views);
      setViews(data.views[0].views || 0);
    };

    fetchViews();
    //const interval = setInterval(fetchViews, 60000);

    //return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`flex items-center gap-2 rounded-md border border-custom_purple/20 
	      bg-transparent px-4 py-2 text-sm backdrop-blur-sm 
	      transition-transform hover:scale-105`}
      >
        <Eye className="h-4 w-4 text-custom_purple" />
        <span className="font-mono text-white">{views.toLocaleString()}</span>
        <span className="text-xs text-[#FF8B8B]">{t("views")}</span>
      </div>
    </div>
  );
}
