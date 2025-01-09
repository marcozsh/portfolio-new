"use client";
import { FaGithub, FaLinkedin, FaFileContract } from "react-icons/fa";
import CustomTypeWritter from "./typewritter";
import { useTranslations } from "next-intl";
import CustomButton from "../custom-button/custom-button";
import {routing} from "@/i18n/routing";
export default function Landing() {
  const t = useTranslations("landing");
  return (
    <section className="flex justify-center h-screen xl:h-auto xl:mt-32 xl:justify-between p-4">
      <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start">
        <span className="text-2xl">
          <CustomTypeWritter text={t("hi_message")} />
        </span>
        {/*<h1 className="text-6xl font-bold flex flex-col gap-3">*/}
        <h1 className="text-6xl font-bold flex-col gap-3 animate-text-gradient inline-flex bg-gradient-to-r from-white to-custom_purple bg-[100%_auto] bg-clip-text leading-tight text-transparent">
          <span>{t("name")} Marco Peña</span>
        </h1>
        <p className="text-custom_gray mt-5">{t("subtitle")}</p>
        <div className="flex flex-row gap-5 mt-5">
          <CustomButton
            icon=<FaGithub />
            text="GitHub"
            href="https://github.com/marcozsh"
          />
          <CustomButton
            icon=<FaLinkedin />
            text="Linkedin"
            href="https://www.linkedin.com/in/marcozsh/"
          />
          <CustomButton
            icon=<FaFileContract />
            text="CV"
            href={`${t("cv")}`}
          />
        </div>
      </div>
      <div className="xl:flex flex-col gap-3 hidden">
        <img src="/img-1.webp" className="w-[550px]" alt="landing image" />
      </div>
    </section>
  );
}
