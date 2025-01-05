import { useTranslations } from "next-intl";
export default function About() {
  const t = useTranslations("about");
  return (
    <section
      id="about-me"
      className="flex justify-center lg:justify-between my-32 text-center m-4 text-pretty pb-10 md:text-start xl:m-0"
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl font-bold flex flex-col gap-3">
          <span className="text-custom_purple">{t("header")}</span>
        </h1>
        <div
          className="text-custom_gray mt-5 max-w-[600px] text-pretty [&>p>strong]:text-custom_purple"
          dangerouslySetInnerHTML={{ __html: t.raw("description") }}
        ></div>
      </div>
      <div className="lg:flex flex-col gap-3 hidden">
        <img
	loading="lazy"
	decoding="async"
          src="/img-2.webp"
          className="w-[550px]"
          alt="about me image"
        />
      </div>
    </section>
  );
}
