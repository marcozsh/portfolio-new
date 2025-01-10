import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

import { localePrefix, routing, pathnames } from "./routing";

const locales = routing.locales;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });
