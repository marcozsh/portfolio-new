import TimeLineComponent from "@/components/experience/timeline";
import CodeBrackets from "@/components/code-brackets/code-brackets";
import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("experience");

  const keys = ["job_1", "job_2"] as const;

  const details = keys.map((key) => ({
    position: t(`${key}.position`),
    date: t(`${key}.date`),
    description: t(`${key}.description`),
  }));


  return (
    <section
      id="experience"
      className="landing-section flex flex-col justify-between mt-28 mb-10"
    >
      <div className="flex justify-center xl:mb-20">
        <h2 className="text-4xl font-bold">
          <CodeBrackets text={t("header")} />
        </h2>
      </div>
      <div className="flex flex-row justify-center pt-14 m-5 xl:m-0 text-pretty items-center">
        <TimeLineComponent details={details} />;
      </div>
    </section>
  );
}
