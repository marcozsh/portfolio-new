"use client";
import { FaList } from "react-icons/fa";
import { useState } from "react";
import { useTranslations } from "next-intl";

import Link from "next/link";
import MenuNav from "./menu-nav";

export default function CustomNavbar() {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

  const t = useTranslations("header");

  const links = ["projects", "experience", "about", "contact"];

  const header = links.map((key) => ({
    name: t(`${key}.name`),
    href: t(`${key}.href`),
  }));

  const openMenu = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <>
      <nav className="xl:flex justify-between mt-4 top-2 sticky backdrop-blur-[600px] rounded-full z-50 hidden">
        <div className="flex justify-between w-full p-4 mx-auto text-white">
          {header.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className="hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out cursor-pointer"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
      <div className="xl:hidden">
        <div className="flex absolute backdrop-blur-[200px] bg-black-40 rounded top-4 right-7 z-10">
          <FaList className="w-10 h-10 cursor-pointer" onClick={openMenu} />
        </div>
      </div>
      {isNavVisible && (
        <div className="flex flex-col absolute backdrop-blur-[200px] bg-black-40 rounded top-16 w-full z-10 xl:hidden">
          <MenuNav />
        </div>
      )}
    </>
  );
}
