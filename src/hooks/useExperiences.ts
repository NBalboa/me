import { Experience } from "../types/experience"


export const useExperiences = () => {
  const experiences: Experience[] = [
    {
      company_name: "Kooapps Philippines Corporation",
      positon: "Programmer",
      started: "November 2025",
      ended: "February 2026",
      higlights: [
        `Learned and applied C++ fundamentals, including object-oriented programming (OOP), memory management, and problem-solving techniques.`,
        `Developed an iOS Card Game using Objective-C, implementing game logic, scoring system, and interactive UI components.`,
        `Built a Set Card Game on iOS using Objective-C, implementing card-matching algorithms and rule validation logic.`,
        `Applied MVC architecture in iOS development to separate game logic, UI, and data models effectively.`,
        `Implemented event handling, dynamic UI updates, and state management for a smooth user gameplay experience.`
      ],
      isPresent: false,
    },
    {
      company_name: "Molave Youngs Milling Corp.",
      positon: "Junior Software Developer",
      started: "June 2025",
      ended: "November 2025",
      higlights: [
        `Developed and maintained full-stack applications using TypeScript, NestJS, Next.js,
      React.js, and Prisma ORM, ensuring scalability and performance.`,
        `Built and integrated RESTful APIs with Swagger, improving system documentation and
      cross-team collaboration.`,
        `Contributed to mobile app development with React Native, enhancing user accessibility
      and experience.`,
        `Applied Agile methodologies with Sprint Planning and Jira, collaborating with cross-
      functional teams to deliver projects on time.`,
        `Implemented state management with Redux, optimizing application performance and
      aintainability.`
      ],
      isPresent: false
    },
    {
      company_name: "Camp Connection",
      positon: "Front-End Developer",
      started: "February 2025",
      ended: "August 2025",
      higlights: [
        `Developed and maintained modern, responsive web applications using React,
        TailwindCSS, and JavaScript.`,
        `Wrote scalable, reusable, and well-documented code, ensuring maintainability and
        collaboration.`,
        `Integrated REST APIs to enhance application interactivity and real-time content delivery.`,
        `Collaborated with designers and back-end developers to define requirements and
        implement robust features.`,
        `Participated in agile development cycles, sprint planning, and task management.`,
        `Resolved technical issues in production environments, ensuring reliability and smooth
        user experiences.`
      ]
    }
  ]


  return {
    experiences
  }
}

