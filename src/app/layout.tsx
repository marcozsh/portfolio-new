import type { Metadata } from "next";
import { comfortaa } from "./fonts";
import CustomNavbar from "@/components/nav/navbar";
import Footer from "@/components/footer/footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const urlHost = process.env.PAGE_URL || "";

const title = "Marco Peña | Fullstack Developer";

const description = `Fullstack Developer, NextJs, JavaScript, HTML, CSS, Tailwind`;

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: `Programming, NextJs, JavaScript, HTML, CSS, Tailwind, Portfolio, Fullstack, Developer, Web, React, Frontend, Backend, Web, Marcozsh, marcozsh, Marco Peña, 
  Marco Pena, Web developer, Software developer, Software engineer, Software, Engineer, Developer, Fullstack developer, Fullstack, Developer, React developer,`,
  authors: [{ name: "Marco Peña" }],
  robots: "index, follow",
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  alternates: { canonical: urlHost },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <Analytics />
      <body
        className={`${comfortaa.className} antialiased max-w-[1200px] mx-auto bg-animated`}
      >
        <CustomNavbar />
        {children}
        <hr
          className={`m-[0] border-custom_purple border-[1px] border-solid w-full opacity-[0.2]`}
        />
        <Footer />
      </body>
    </html>
  );
}
