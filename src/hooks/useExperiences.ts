import { Experience } from "../types/experience"


export const useExperiences = () => {
  const experiences: Experience[] = [
    {
      company_name: "Molave Youngs Milling Corp.",
      positon: "Junior Software Developer",
      started: "June 2025",
      ended: "November 2025",
      higlights: [
        "Developed and maintained scalable full-stack applications using TypeScript, NestJS, Next.js, and React, improving system performance and maintainability",
        "Designed and integrated RESTful APIs with Swagger, enhancing API documentation and team collaboration",
        "Contributed to a React Native mobile application, improving accessibility and user engagement",
        "Implemented Redux state management, reducing UI inconsistencies and improving application responsiveness",
        "Collaborated in Agile sprints using Jira, ensuring timely delivery of features and bug fixes"
      ]
    },
    {
      company_name: "Camp Connection",
      positon: "Front-End Developer (Part-time)",
      started: "February 2025",
      ended: "August 2025",
      higlights: [
        "Developed responsive web applications using React and TailwindCSS, improving user experience across multiple devices",
        "Integrated REST APIs to deliver dynamic and real-time content",
        "Collaborated with designers and backend developers to build scalable and maintainable features",
        "Resolved production issues, improving application stability and reducing downtime",
        "Participated in agile workflows, including sprint planning and task management"
      ]
    },
    {
      company_name: "Kooapps Philippines Corporation",
      positon: "Programmer",
      started: "November 2025",
      ended: "February 2026",
      higlights: [
        "Developed iOS card games using Objective-C, implementing game logic, scoring systems, and interactive UI components",
        "Built a card-matching game with rule validation and algorithm-based logic",
        "Applied MVC architecture to separate application layers and improve maintainability",
        "Implemented event handling and dynamic UI updates for smooth gameplay experience",
        "Strengthened knowledge in object-oriented programming, algorithms, and performance optimization"
      ]
    }
  ]

  return {
    experiences
  }
}

