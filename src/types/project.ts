import { TechStack } from "./tech_stack";

export type Project = {
  name: string;
  descriptions: string[];
  project_link: string;
  tech_stacks: TechStack[];
};
