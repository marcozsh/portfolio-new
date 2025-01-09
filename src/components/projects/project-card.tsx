import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import CustomButton from "../custom-button/custom-button";

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
  const webLink = links ? links[1].link : " ";
  return (
    <div className="flex flex-col items-center text-center xl:text-start xl:flex-row m-7 xl:m-0 pb-14">
      <Link
        href={webLink}
        target="_blank"
        rel="noopener"
        className="m-8 xl:m-0"
      >
        <img
          src={pageImg}
          className="w-[650px] rounded-xl"
          alt="project card image"
        />
      </Link>
      <div className="pl-5 flex flex-col gap-8 justify-center">
        <span className="text-3xl font-bold">{name}</span>
        <div className="flex flex-row gap-3 max-w-screen-lg">
          <p className="text-custom_gray">{description}</p>
        </div>
        <div className="flex flex-row gap-3 justify-center xl:justify-start">
          {links?.map((link, index) =>
            link.type === 1 ? (
              <CustomButton
                key={index}
                icon=<FaGithub />
                text="Código Fuente"
                href={link.link}
              />
            ) : (
              <CustomButton
                key={index}
                icon=<FaLink />
                text="Sitio web"
                href={link.link}
              />
            ),
          )}
        </div>
        <div className="flex flex-row flex-wrap gap-3 justify-center xl:justify-start">
          {techs?.map((tech, index) => (
            <img
              key={index}
              src={tech.img}
              className="rounded"
              alt="tech image"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
