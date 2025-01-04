/*
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
};
export default nextConfig;
*/
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
