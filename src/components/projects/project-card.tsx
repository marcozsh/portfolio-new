import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import CustomButton from "../custom-button/custom-button";

type ProjectCardProps = {
  name: string;
  description: string;
  pageImg: string;
  linkString: string;
  alt: string;	
  links?: { link: string; type: number }[];
  techs?: React.ReactNode[];
};

export default function ProjectCard({
  name,
  description,
  pageImg,
  linkString,
  links,
  techs,
  alt,
}: ProjectCardProps) {
  const webLink = links ? links[1].link : " ";
  return (
    <div className="flex flex-col items-center text-center md:text-start lg:flex-row m-7 xl:m-0 pb-14">
      <Link
        href={webLink}
        target="_blank"
        rel="noopener"
        className="m-8 xl:m-0"
      >
        <Image
          src={pageImg}
          width={400}
          height={0}
          className="w-[550px] lg:w-[400px] rounded-xl lg:max-w-fit"
	  alt={alt}
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
                icon=<FaGithub className="w-5 h-5 mr-2" />
                text="GitHub"
                href={link.link}
              />
            ) : (
              <CustomButton
                key={index}
                icon=<FaLink className="w-5 h-5 mr-2" />
                text={linkString}
                href={link.link}
              />
            ),
          )}
        </div>
        <div className="flex flex-row flex-wrap gap-3 justify-center xl:justify-start">
          {/*<img
              key={index}
              src={tech.img}
              className="rounded"
              alt="tech image"
              loading="lazy"
              decoding="async"
	      height={28}
            />*/}
          {techs?.map((tech, index) => <div key={index}>{tech}</div>)}
        </div>
      </div>
    </div>
  );
}
