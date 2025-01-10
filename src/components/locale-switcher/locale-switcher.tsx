import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelector from "./locale-switcher-selector";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("defaultLocale");
  const locale = useLocale();

  const { locales } = routing;
  return (
    <LocaleSwitcherSelector defaultValue={locale} label={t("label")}>
      {locales.map((cur) => (
        <option key={cur} value={cur} className="bg-black p-10 m-10 ">
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelector>
  );
}
