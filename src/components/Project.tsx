import { Project as PROJECT_TYPE } from "../types/project";
import TechStack from "./TechStack";

type ProjectProps = {
  project: PROJECT_TYPE;
};

const Project = ({ project }: ProjectProps) => {
  return (
    <div className="space-y-2 mt-2">
      <a
        href={project.project_link}
        target="_blank"
        className="hover:underline"
      >
        <h2 className="flex gap-2 items-center text-xl font-bold mt-2">
          {project.name}
        </h2>
      </a>

      <div className="text-justify ms-5">
        <ul className="list-disc space-y-2">
          {project.descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        <h3 className="font-bold text-md mb-2">Technology Stacks</h3>
        <div className="flex gap-2 flex-wrap space-x-2">
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
