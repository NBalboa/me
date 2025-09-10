import Title from "../components/Title";
import Project from "../components/Project";
import { useProjects } from "../hooks/useProjects";

const Projects = () => {
  const { projects } = useProjects();

  return (
    <div>
      <Title label="Projects" />
      <div className="space-y-2 divide-y divide-accent text-foreground">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
