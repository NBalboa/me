import { FaBootstrap, FaHtml5, FaLaravel } from "react-icons/fa";
import Title from "../components/Title";
import { DiJqueryLogo, DiMysql } from "react-icons/di";
import { MdJavascript } from "react-icons/md";
import { project } from "../types/project";
import Project from "../components/Project";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";

const Projects = () => {
  const projects: project[] = [
    {
      project_link: "https://github.com/NBalboa/water_billing",
      name: "Water Billing",
      description: `A comprehensive Water Billing System designed for Vincenzo Sagun,
            streamlining water consumption tracking, automated billing
            generation, and payment management to ensure efficient and accurate
            utility services.`,
      tech_stacks: [
        {
          name: "Laravel",
          icon: <FaLaravel />,
          isHover: true,
        },
        {
          name: "Blade",
          icon: "Blade",
          isHover: false,
        },
        {
          name: "HTML",
          icon: <FaHtml5 />,
          isHover: true,
        },
        {
          name: "Bootstrap",
          icon: <FaBootstrap />,
          isHover: true,
        },
        {
          name: "Javascript",
          icon: <MdJavascript />,
          isHover: true,
        },
        {
          name: "JQuery",
          icon: <DiJqueryLogo />,
          isHover: true,
        },
        {
          name: "MySQL",
          icon: <DiMysql />,
          isHover: true,
        },
      ],
    },
    {
      project_link: "https://github.com/NBalboa/pagadian-careers",
      name: "Pagadian Careers",
      description: `A job portal application designed to connect job seekers and employers in Pagadian City and beyond. The platform provides essential features for managing 
      job postings, applications, and user profiles.`,
      tech_stacks: [
        {
          name: "Laravel",
          icon: <FaLaravel />,
          isHover: true,
        },
        {
          name: "Blade",
          icon: "Blade",
          isHover: false,
        },
        {
          name: "Inertia.js",
          icon: "Inertia.js",
          isHover: false,
        },
        {
          name: "HTML",
          icon: <FaHtml5 />,
          isHover: true,
        },
        {
          name: "TailwindCSS",
          icon: <RiTailwindCssFill />,
          isHover: true,
        },
        {
          name: "Javascript",
          icon: <MdJavascript />,
          isHover: true,
        },
        {
          name: "MySQL",
          icon: <DiMysql />,
          isHover: true,
        },
      ],
    },
    {
      name: "Mango Drive",
      project_link: "https://github.com/NBalboa/mangoi-drive-v1",
      description: `An online restaurant shop, 
        designed to offer customers an easy and seamless food ordering experience. 
        The platform integrates PayPal for secure and convenient payment processing, 
        enabling customers to browse the menu, select items, and complete transactions 
        online.`,
      tech_stacks: [
        {
          name: "Laravel",
          icon: <FaLaravel />,
          isHover: true,
        },

        {
          name: "Inertia.js",
          icon: "Inertia.js",
          isHover: false,
        },
        {
          name: "React",
          icon: <GrReactjs />,
          isHover: true,
        },
        {
          name: "HTML",
          icon: <FaHtml5 />,
          isHover: true,
        },
        {
          name: "TailwindCSS",
          icon: <RiTailwindCssFill />,
          isHover: true,
        },
        {
          name: "Javascript",
          icon: <MdJavascript />,
          isHover: true,
        },
        {
          name: "MySQL",
          icon: <DiMysql />,
          isHover: true,
        },
      ],
    },
    {
      name: "5th Avenue Grill and Restobar",
      project_link: "https://github.com/NBalboa/5th-avenue",
      description: `An online restaurant platform created to provide customers with a smooth and 
        effortless food ordering experience. Allowing customers to explore the menu, 
        choose their items, and complete transactions entirely online.`,
      tech_stacks: [
        {
          name: "Laravel",
          icon: <FaLaravel />,
          isHover: true,
        },
        {
          name: "Inertia.js",
          icon: "Inertia.js",
          isHover: false,
        },
        {
          name: "React",
          icon: <GrReactjs />,
          isHover: true,
        },
        {
          name: "HTML",
          icon: <FaHtml5 />,
          isHover: true,
        },
        {
          name: "TailwindCSS",
          icon: <RiTailwindCssFill />,
          isHover: true,
        },
        {
          name: "Typescript",
          icon: <SiTypescript />,
          isHover: true,
        },
        {
          name: "MySQL",
          icon: <DiMysql />,
          isHover: true,
        },
      ],
    },
  ];
  return (
    <div>
      <Title label="Projects" />
      <div className="space-y-2 divide-y divide-gray-400 ">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
