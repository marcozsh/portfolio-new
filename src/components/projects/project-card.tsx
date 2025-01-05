import { GitHubSVG, LinkSVG } from "@/components/projects/custom_svg";
import Link from "next/link";

type ProjectCardProps = {
  name: string;
  description: string;
  pageImg: string;
  links?: { link: string; type: number }[];
  techs?: { img: string }[];
};

export default function ProjectCard({
  name,
  description,
  pageImg,
  links,
  techs,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col items-center text-center xl:text-start xl:flex-row m-7 lg:m-0">
      <img src={pageImg} className="w-[650px]" alt="project card image"/>
      <div className="pl-5 flex flex-col gap-8 justify-center">
        <span className="text-3xl font-bold">{name}</span>
        <div className="flex flex-row gap-3 max-w-screen-lg">
          <p className="text-custom_gray opacity-[0.6]">{description}</p>
        </div>
        <div className="flex flex-row gap-3 justify-center xl:justify-start">
          {links?.map((link, index) =>
            link.type === 1 ? (
              <Link key={index} href={link.link} target="_blank">
                <GitHubSVG />
              </Link>
            ) : (
              <Link key={index} href={link.link} target="_blank">
                <LinkSVG />
              </Link>
            ),
          )}
        </div>
        <div className="flex flex-row flex-wrap gap-3 justify-center xl:justify-start">
          {techs?.map((tech, index) => (
            <img key={index} src={tech.img} className="rounded" alt="tech image" loading="lazy" decoding="async" />
          ))}
        </div>
      </div>
    </div>
  );
}
