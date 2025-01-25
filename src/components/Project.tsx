import { project } from "../types/project";
import TechStack from "./TechStack";

type ProjectProps = {
  project: project;
};

const Project = ({ project }: ProjectProps) => {
  return (
    <div className="space-y-2 mt-2">
      <a
        href={project.project_link}
        target="_blank"
        className="hover:underline"
      >
        <h2 className="flex gap-2 items-center text-xl font-bold ">
          {project.name}
        </h2>
      </a>
      <p className="text-justify ms-5">{project.description}</p>
      <div></div>
      <div>
        <h3 className="font-bold text-md mb-2">Technology Stacks</h3>
        <div className="flex gap-2 flex-wrap">
          {project.tech_stacks.map((tech_stack, index) => (
            <TechStack
              icon={tech_stack.icon}
              name={tech_stack.name}
              isHover={tech_stack.isHover}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
