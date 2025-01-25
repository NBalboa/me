import Education from "../components/Education";
import Title from "../components/Title";
import { education } from "../types/Education";

const About = () => {
  const educations: education[] = [
    {
      course: "Bachelor Of Science in Computer Science",
      school_name: "Western Mindanao State University",
      isPresent: true,
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
      <Title label="Introduction" />
      <p className="text-md text-justify">
        I am a skilled web developer with expertise in Laravel, React, and
        dynamic UI development using React, TailwindCSS and Inertia.js and I
        have strong focus on backend development. Seeking opportunities to
        contribute to a professional environment through effective teamwork,
        problem solving, and clear communication. Passionate about coding with a
        solid foundation in programming concepts. Eager to contribute to
        successful outcomes and further develop skills in a dynamic environment.
      </p>
      <div className="space-y-2">
        <Title label="Education" />
        <div className="space-y-2 divide-y divive-gray-400">
          {educations.map((education, index) => (
            <Education key={index} education={education} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
