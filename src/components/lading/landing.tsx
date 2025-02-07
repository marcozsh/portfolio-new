"use client";
import { FaGithub, FaLinkedin, FaFileContract } from "react-icons/fa";
import CustomTypeWritter from "./typewritter";
import { useTranslations } from "next-intl";
import CustomButton from "../custom-button/custom-button";
import ImgShape from "./img-shape";
import StatusTag from "./status-tag";
export default function Landing() {
  const t = useTranslations("landing");
  return (
    <section className="flex justify-center h-screen xl:h-auto xl:mt-32 xl:justify-between p-4">
      <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start">
        <div className="flex flex-row justify-between w-full">
          <span className="text-2xl">
            <CustomTypeWritter text={t("hi_message")} />
          </span>
          <StatusTag text={t("available")} />
        </div>
        <h1 className="text-6xl font-bold flex-col gap-3 animate-text-gradient inline-flex bg-gradient-to-r from-white to-custom_purple bg-[100%_auto] bg-clip-text leading-tight text-transparent">
          <span>{t("name")} Marco Peña</span>
        </h1>
        <div className="flex flex-row w-full justify-center sm:justify-between text-sm sm:text-left">
          <p className="text-custom_gray mt-5">{t("subtitle")}</p>
        </div>
        <div className="flex flex-col w-full sm:flex-row sm:w-auto gap-5 mt-5">
          <CustomButton
            icon=<FaGithub className="w-5 h-5 mr-2"/>
            text="GitHub"
            href="https://github.com/marcozsh"
          />
          <CustomButton
            icon=<FaLinkedin className="w-5 h-5 mr-2" />
            text="Linkedin"
            href="https://www.linkedin.com/in/marcozsh/"
          />
          <CustomButton icon=<FaFileContract className="w-5 h-5 mr-2" /> text="CV" href={`${t("cv")}`} />
        </div>
      </div>
      <div className="xl:flex flex-col gap-3 hidden">
        <ImgShape>
          <img
            src="/img-1.webp"
            className="relative -z-10 translate-y-10"
            width={550}
            height={0}
            alt="Marco Peña's profile picture"
          />
        </ImgShape>
      </div>
    </section>
  );
}
