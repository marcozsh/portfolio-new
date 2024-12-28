import ProjectCard from "./project-card";
import { projects } from "@/data/projects-data";
import CodeBrackets from "@/components/code-brackets/code-brackets";

export default function Projects() {
  return (
    <section
      id="projects"
      className="landing-section flex flex-col justify-between mt-44"
    >
      <div className="flex justify-center lg:mb-20">
        <h2 className="text-4xl font-bold">
          <CodeBrackets text="Proyectos" />
        </h2>
      </div>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          description={project.description}
          pageImg={project.pageImg}
          links={project.links}
          techs={project.techs}
        />
      ))}
    </section>
  );
}
