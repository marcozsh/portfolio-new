import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { LocalePrefix, Pathnames } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
});
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export type Locales = typeof routing.locales;

export const pathnames: Pathnames<Locales> = {
  "/": "/",
};
export const localePrefix: LocalePrefix<Locales> = "always";
