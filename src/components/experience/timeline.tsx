import Link from "next/link";

type TimeLineProps = {
  details: {
    position: string;
    date: string;
    description: string;
    companyLink: string;
    company: string;
  }[];
};

export default function TimeLineComponent({ details }: TimeLineProps) {
  return (
    <ol className="relative border-s border-gray-200">
      {details.map((detail, index) => (
        <li key={index} className="mb-10 ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-[6px] -start-1.5 bg-custom_purple"></div>
          <time className="mb-1 text-sm font-normal leading-none text-custom_gray opacity-[0.6]">
            {detail.date}
          </time>
          <h3 className="text-lg font-bold">
            {detail.position} -
            <Link
              className="underline hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out cursor-pointer"
              href={detail.companyLink}
	      target="_blank"
            >
              {" "}
              {detail.company}
            </Link>
          </h3>
          <p className="mb-4 text-base font-normal text-custom_gray">
            {detail.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
