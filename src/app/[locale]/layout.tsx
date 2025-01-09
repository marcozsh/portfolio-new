import { manrope } from "../fonts";
import CustomNavbar from "@/components/nav/navbar";
import Footer from "@/components/footer/footer";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";

//locale imports
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  unstable_setRequestLocale,
  getTranslations,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
//locale imports

const urlHost = process.env.PAGE_URL;

const title = "Marco Peña | Fullstack Developer";

const description = `Fullstack Developer, NextJs, JavaScript, HTML, CSS, Tailwind`;

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

//export const metadata: Metadata = {};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, "children">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });
  return {
    metadataBase: new URL("https://marcozsh.dev/"),
    title: t("title"),
    description: description,
    keywords: `Programming, NextJs, JavaScript, HTML, CSS, Tailwind, Portfolio, Fullstack, Developer, Web, React, Frontend, Backend, Web, Marcozsh, marcozsh, Marco Peña, 
  Marco Pena, Web developer, Software developer, Software engineer, Software, Engineer, Developer, Fullstack developer, Fullstack, Developer, React developer,`,
    authors: [{ name: "Marco Peña" }],
    robots: "index, follow",
    icons: { icon: "../favicon.ico", apple: "../favicon.ico" },
    alternates: {
      canonical: urlHost,
      languages: {
        "es-CL": "/es",
        "en-US": "/en",
      },
    },
    openGraph: {
      title: title,
      description: description,
      images: [{ url: "/opengraphimage.png", alt: title }],
      url: urlHost,
      type: "website",
      countryName: "Chile",
      emails: "marc.penar@outlook.cl",
      siteName: "Marco Peña | Portfolio",
    },
    twitter: {
      title: title,
      description: description,
      images: [{ url: "/img-1.webp", alt: title }],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<Props>) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <Analytics />
      <body
        className={`${manrope.className} antialiased max-w-[1200px] mx-auto`}
      >
        <NextIntlClientProvider messages={messages}>
          <CustomNavbar />
          {children}
          <hr
            className={`m-[0] border-custom_purple border-[1px] border-solid w-full opacity-[0.2]`}
          />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
