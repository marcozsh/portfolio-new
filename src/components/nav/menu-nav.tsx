"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
export default function MenuNav() {
  const t = useTranslations("header");

  const links = ["projects", "experience", "about", "contact"];

  const header = links.map((key) => ({
    name: t(`${key}.name`),
    href: t(`${key}.href`),
  }));
  return (
    <>
      {header.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`text-center w-full block text-[1.2rem] leading-[5rem] text-white hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out`}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
