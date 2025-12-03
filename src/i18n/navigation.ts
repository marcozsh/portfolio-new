import { createNavigation } from "next-intl/navigation";

import { localePrefix, routing, pathnames } from "./routing";

const locales = routing.locales;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({
    locales,
    pathnames,
    localePrefix,
  });
