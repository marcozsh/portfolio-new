"use client";
import Link from "next/link";
import { FaCode, FaList } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import MenuNav from "./menu-nav";
import CodeBrackets from "../code-brackets/code-brackets";
export default function CustomNavbar() {
  const [isBackGround, setIsBackGround] = useState<boolean>(true);
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

  const stopBackGround = () => {
    document.body.classList.toggle("bg-animated");
    setIsBackGround(!isBackGround);
  };

  const openMenu = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <>
      <nav className="xl:flex justify-between mt-4 top-2 sticky backdrop-blur-[600px] rounded-full z-50 hidden">
        <div className="flex justify-between w-full p-4 mx-auto">
          <Link
            href="/"
            className="hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out cursor-pointer"
          >
            <CodeBrackets text="MP" />
          </Link>
        </div>
        <div className="flex justify-between w-full p-4 mx-auto text-white">
          <Link
            href={`/#projectos`}
            className="hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out cursor-pointer"
          >
            <CodeBrackets text="Projectos" />
          </Link>
          <Link
            href="/#experience"
            className="hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out cursor-pointer"
          >
            <CodeBrackets text="Experiencia" />
          </Link>
          <Link
            href="/#about-me"
            className="hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out cursor-pointer"
          >
            <CodeBrackets text="Sobre mí" />
          </Link>
          <Link
            href="mailto:marc.penar@outlook.cl"
            target="_blank"
            className="hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out cursor-pointer"
          >
            <CodeBrackets text="Contáctame" />
          </Link>

          <button onClick={stopBackGround}>
            <FaCode
              className="hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out cursor-pointer"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={`${
                isBackGround ? "Detener" : "Iniciar"
              } animación de fondo`}
              data-tooltip-place="right"
            />
          </button>
          <Tooltip id="my-tooltip" place="left" />
        </div>
      </nav>
      <div className="xl:hidden">
        <div className="flex absolute backdrop-blur-[200px] bg-black-40 rounded top-4 right-7 z-10">
          <FaList className="w-10 h-10 cursor-pointer" onClick={openMenu} />
        </div>
        <div className="top-4hidden">
          <button onClick={stopBackGround}>
            <FaCode
              className="w-10 h-10 absolute left-7 hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out cursor-pointer"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={`${
                isBackGround ? "Detener" : "Iniciar"
              } animación de fondo`}
              data-tooltip-place="right"
            />
          </button>
          <Tooltip id="my-tooltip" place="bottom" />
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
