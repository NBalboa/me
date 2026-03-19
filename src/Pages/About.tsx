import Education from "../components/Education";
import Title from "../components/Title";
import { Education as EDUCATION_TYPE } from "../types/Education";

const About = () => {
  const educations: EDUCATION_TYPE[] = [
    {
      course: "Bachelor Of Science in Computer Science",
      school_name: "Western Mindanao State University",
      isPresent: false,
      yearStart: 2020,
      yearEnd: 2025,
      address: "Bulatok, Pagadian City",
    },
    {
      course: `Technical Vocational & Livelihood (TVL) Track - Computer System
            Servicing (CSS) - (with honors)`,
      school_name: "Sta. Lucia National High School",
      isPresent: false,
      yearStart: 2018,
      yearEnd: 2019,
      address: "Sta. Lucia, Pagadian City",
    },
  ];

  return (
    <div className="space-y-2">
      <Title label="Summary" />
      <div className="space-y-2">
        <p className="text-md text-justify text-foreground">
          Full-Stack Web Developer with hands-on experience building scalable web and mobile applications using TypeScript, NestJS, React, and React Native
        </p>
        <p>
          Proven ability to develop RESTful APIs, optimize system performance, and deliver user-focused solutions in agile environments.
        </p>
        <p>
          Skilled in both frontend and backend development with a strong focus on clean architecture, maintainability, and real-world problem solving.
        </p>
      </div>
      <p className="text-md text-justify text-foreground">
      </p>
      <div className="space-y-2">
        <Title label="Education" />
        <div className="space-y-2 divide-y divive-accent">
          {educations.map((education, index) => (
            <Education key={index} education={education} />
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Title label="Additional Information" />
        <div className="text-justify ms-5 ">
          <ul className="list-disc space-y-2">
            <li>Strong problem-solving and analytical skills</li>
            <li>Effective communication and teamwork in agile environments</li>
            <li>Passionate about continuous learning and modern technologies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
