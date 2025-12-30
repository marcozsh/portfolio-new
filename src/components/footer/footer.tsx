import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../locale-switcher/locale-switcher";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <>
      <footer className="text-center flex flex-col pt-10 gap-3 pb-5 content-end">
        <p>{t("message")}</p>
        <div
          id="contact-me"
          className="flex flex-row pt-10 lg:pt-5 justify-center gap-2"
        >
          <FiMail className="text-2xl" width={30} height={30} />
          <Link
            className="underline hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out"
            href="mailto:marc.penar@outlook.cl"
            target="_blank"
          >
            marc.penar@outlook.cl
          </Link>
        </div>
        <p className="font-bold hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out">
          Marco Peña 2025
        </p>
	<div className="flex justify-end">
        <LocaleSwitcher />
	</div>
      </footer>
    </>
  );
}
