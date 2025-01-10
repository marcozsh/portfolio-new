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
import LocaleSwitcher from "@/components/locale-switcher/locale-switcher";
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
      images: [{ url: "/opengraphimage.png", alt: title }],
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
        {/*Background credits to https://bg.ibelick.com/*/}
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full bg-slate-950">
            <div
              className={`absolute bottom-0 left-0 right-0 top-0 
		bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
		bg-[size:14px_24px]`}
            ></div>
          </div>
        </div>
        {/*Background*/}
        <NextIntlClientProvider messages={messages}>
          <CustomNavbar />
	  <div className="xl:hidden">
	  <LocaleSwitcher/>
	  </div>
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
