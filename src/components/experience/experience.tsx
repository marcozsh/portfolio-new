import TimeLineComponent from "@/components/experience/timeline";
import { experience } from "@/data/experience";
import CodeBrackets from "@/components/code-brackets/code-brackets";

export default function Experience() {
  return (
    <section
      id="experience"
      className="landing-section flex flex-col justify-between mt-28 mb-10"
    >
      <div className="flex justify-center lg:mb-20">
        <h2 className="text-4xl font-bold">
          <CodeBrackets text="Experiencia" />
        </h2>
      </div>
      <div className="flex flex-row justify-center pt-14 m-5 lg:m-0 text-pretty">
        {experience.map((experience, index) => (
          <TimeLineComponent key={index} details={experience.details} />
        ))}
      </div>
    </section>
  );
}
