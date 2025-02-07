import { useTranslations } from "next-intl";
import CodeBrackets from "../code-brackets/code-brackets";
import ImgShape from "../lading/img-shape";
export default function About() {
  const t = useTranslations("about");
  return (
    <section
      id="about-me"
      className="flex justify-center lg:justify-between my-32 text-start m-4 text-pretty pb-10 xl:m-0"
    >
      <div className="flex flex-col justify-center">
        <h2 className="text-5xl font-bold flex flex-col gap-3">
          <CodeBrackets text={t("header")} showBrackets />
        </h2>
        <div
          className="text-custom_gray mt-5 max-w-[600px] text-pretty [&>p>strong]:text-custom_purple"
          dangerouslySetInnerHTML={{ __html: t.raw("description") }}
        ></div>
      </div>
      <div className="lg:flex flex-col gap-3 hidden">
      <ImgShape>
	<img
          loading="lazy"
          decoding="async"
          src="/img-2.webp"
          className="relative -z-10 translate-y-10"
          alt="Marco Peña's profile picture about section"
        />
      </ImgShape>
        
      </div>
    </section>
  );
}
