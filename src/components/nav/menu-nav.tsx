"use client";
import Link from "next/link";
import CodeBrackets from "../code-brackets/code-brackets";
export default function MenuNav() {
  const links = [
    {
      name: "Projectos",
      href: "/#projects",
    },
    {
      name: "Experiencia",
      href: "/#experience",
    },
    {
      name: "Sobre mí",
      href: "/#about-me",
    },

    {
      name: "Contáctame",
      href: "/#contact-me",
    },
  ];

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`text-center w-full block text-[1.2rem] leading-[5rem] text-white hover:text-primary hover:transition-colors hover:duration-300 hover:ease-in-out`}
          >
            <CodeBrackets text={link.name} />
          </Link>
        );
      })}
    </>
  );
}
