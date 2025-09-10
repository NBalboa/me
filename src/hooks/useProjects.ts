import { Project } from "../types/project";
export const useProjects = () => {
  const projects: Project[] = [
    {
      name: "5th Avenue Grill and Restobar - November, 2024",
      project_link: "https://github.com/NBalboa/5th-avenue",
      descriptions: [
        "Implemented an attractive, well-organized digital menu that allows customers to easily browse detailed descriptions and images of each dish.",
        "Developed a user-friendly ordering system that enables effortless item selection, customization, and seamless cart management.",
        "Integrated payment to ensure that all online transactions are secure and reliable",
        "Implemented that provides customers with updates on their order status from confirmation to serving.",
        "Built the platform using Laravel and modern web technologies to ensure it adapts seamlessly across devices and scales efficiently as the user base grows.",
      ],
      tech_stacks: [
        {
          name: "Laravel",
          icon: "laravel",
          isHover: true,
        },
        {
          name: "Inertia.js",
          icon: null,
          isHover: false,
        },
        {
          name: "React",
          icon: "reactjs",
          isHover: true,
        },
        {
          name: "HTML",
          icon: "html",
          isHover: true,
        },
        {
          name: "TailwindCSS",
          icon: "tailwindcss",
          isHover: true,
        },
        {
          name: "Typescript",
          icon: "typescript",
          isHover: true,
        },
        {
          name: "MySQL",
          icon: "mysql",
          isHover: true,
        },
      ],
    },
    {
      name: "Mango Drive - October, 2024",
      project_link: "https://github.com/NBalboa/mangoi-drive-v1",
      descriptions: [
        "Implemented an intuitive interface that allows customers to quickly browse a dynamic menu, select items, and place orders with minimal hassle.",
        "Integrated PayPal for secure and convenient payment processing, ensuring that customer transactions are handled safely.",
        "Developed a system that keeps users informed with updates from order placement to confirmation.",
        "Built Mango Drive on Laravel, ensuring a smooth and responsive experience on desktops, tablets, and smartphones.",
        "Enabled flexible order customization, allowing customers to tailor their selections to meet their personal tastes and dietary requirements.",
      ],
      tech_stacks: [
        {
          name: "Laravel",
          icon: "laravel",
          isHover: true,
        },

        {
          name: "Inertia.js",
          icon: null,
          isHover: false,
        },
        {
          name: "ReactJS",
          icon: "reactjs",
          isHover: true,
        },
        {
          name: "HTML",
          icon: "html",
          isHover: true,
        },
        {
          name: "TailwindCSS",
          icon: "tailwindcss",
          isHover: true,
        },
        {
          name: "Javascript",
          icon: "javascript",
          isHover: true,
        },
        {
          name: "MySQL",
          icon: "mysql",
          isHover: true,
        },
      ],
    },
    {
      project_link: "https://github.com/NBalboa/pagadian-careers",
      name: "Pagadian Careers - August, 2024",
      descriptions: [
        "Implemented an advanced search and filtering system that enables job seekers to browse through a comprehensive collection of job postings based on category, location, and job type.",
        "Developed a dedicated dashboard for employers, allowing them to create, update, and manage job postings efficiently.",
        "Implemented a seamless application workflow that enables candidates to easily apply for positions, upload resumes, and track their application status.",
        "Built detailed profile management features that allow both job seekers and employers to showcase skills, experiences, and company culture effectively.",
        "Ensured the platform was developed with robust security practices and scalable architecture to protect data and accommodate growth in user activity and job listings.",
      ],
      tech_stacks: [
        {
          name: "Laravel",
          icon: "laravel",
          isHover: true,
        },
        {
          name: "Blade",
          icon: null,
          isHover: false,
        },
        {
          name: "Livewire",
          icon: null,
          isHover: false,
        },
        {
          name: "HTML",
          icon: "html",
          isHover: true,
        },
        {
          name: "TailwindCSS",
          icon: "tailwindcss",
          isHover: true,
        },
        {
          name: "Javascript",
          icon: "javascript",
          isHover: true,
        },
        {
          name: "MySQL",
          icon: "mysql",
          isHover: true,
        },
      ],
    },

    {
      project_link: "https://github.com/NBalboa/water_billing",
      name: "Water Billing - April, 2024",
      descriptions: [
        "Implemented automated billing functionality that accurately calculates water consumption and generates bills, significantly reducing manual errors.",
        "Developed features to continuously monitor water usage, providing data to both administrators and customers for improved accountability",
        "Integrated robust payment processing capabilities to ensure safe and efficient handling of all transactions.",
        "Created an intuitive dashboard that allows administrators to easily manage customer accounts and billing history, while customers can conveniently access their usage and payment records.",
        "Engineered the system using Laravel, ensuring that it scales efficiently to meet growing demand while maintaining consistent performance and reliability.",
      ],
      tech_stacks: [
        {
          name: "Laravel",
          icon: "laravel",
          isHover: true,
        },
        {
          name: "Blade",
          icon: null,
          isHover: false,
        },
        {
          name: "HTML",
          icon: "html",
          isHover: true,
        },
        {
          name: "Bootstrap",
          icon: "bootstrap",
          isHover: true,
        },
        {
          name: "Javascript",
          icon: "javascript",
          isHover: true,
        },
        {
          name: "JQuery",
          icon: "jquery",
          isHover: true,
        },
        {
          name: "MySQL",
          icon: "mysql",
          isHover: true,
        },
      ],
    },
  ];
  return {
    projects
  }
}
