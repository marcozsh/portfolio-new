import ProjectCard from "./project-card";
import CodeBrackets from "@/components/code-brackets/code-brackets";
import { useTranslations } from "next-intl";
import {
  NextJsSvg,
  TailwindSvg,
  TypeScriptSvg,
  PostgresSvg,
} from "@/data/svgs";

export default function Projects() {
  const t = useTranslations("projects");
  const keys = ["agendapuntosaludconsciente","cuidomisgastos","img_to_text", "computecnicos"] as const;

  const techMapping = {
    ts: <TypeScriptSvg />,
    nextjs: <NextJsSvg />,
    tailwind: <TailwindSvg />,
    postgres: <PostgresSvg />,
  };

  return (
    <section
      id="projects"
      className="landing-section flex flex-col justify-between mt-44"
    >
      <div className="flex justify-center xl:mb-20">
        <h2 className="text-4xl font-bold">
          <CodeBrackets text={t("header")} showBrackets />
        </h2>
      </div>
      {keys.map((key) => {
        const links = [
          {
            link: t(`${key}.link_1_url`),
            type: Number(t(`${key}.link_1_type`)),
          },
          {
            link: t(`${key}.link_2_url`),
            type: Number(t(`${key}.link_2_type`)),
          },
        ];
        const techs = [];
        for (let i = 1; i <= 4; i++) {
          const techKey = t(`${key}.tech_${i}`);
          const TechComponent =
            techMapping[techKey as keyof typeof techMapping];
          if (TechComponent) {
            techs.push(TechComponent);
          }
        }
        return (
          <ProjectCard
            key={key}
            name={t(`${key}.name`)}
            description={t(`${key}.description`)}
            pageImg={t(`${key}.pageImg`)}
            linkString={t(`link_string`)}
            links={links}
            techs={techs}
	    alt={t(`${key}.alt`)}
          />
        );
      })}
    </section>
  );
}
