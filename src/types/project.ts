import { tech_stack } from "./tech_stack";

export type project = {
  name: string;
  descriptions: string[];
  project_link: string;
  tech_stacks: tech_stack[];
};
