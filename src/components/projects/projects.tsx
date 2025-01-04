import ProjectCard from "./project-card";
import { ts, nextjs, tailwind, postgres } from "@/data/links";
import CodeBrackets from "@/components/code-brackets/code-brackets";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");
  const keys = ["img_to_text", "computecnicos"] as const;

  const techMapping = {
    ts,
    nextjs,
    tailwind,
    postgres,
  };

  return (
    <section
      id="projects"
      className="landing-section flex flex-col justify-between mt-44"
    >
      <div className="flex justify-center xl:mb-20">
        <h2 className="text-4xl font-bold">
          <CodeBrackets text={t('header')} />
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
          if (techKey && techMapping[techKey as keyof typeof techMapping]) {
            techs.push({
              img: techMapping[techKey as keyof typeof techMapping],
            });
          }
        }
        return (
          <ProjectCard
            key={key}
            name={t(`${key}.name`)}
            description={t(`${key}.description`)}
            pageImg={t(`${key}.pageImg`)}
            links={links}
            techs={techs}
          />
        );
      })}
    </section>
  );
}
