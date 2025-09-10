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
      <Title label="Introduction" />
      <p className="text-md text-justify text-foreground">
        Motivated Web Developer with experience in building and maintaining modern web applications.
        Skilled in both front-end and back-end development, with a focus on creating scalable, reliable,
        and user-friendly solutions. Strong problem-solving abilities, effective communication skills, and
        a collaborative mindset. Dedicated to continuous learning and staying updated with emerging
        technologies to deliver quality results in dynamic.
      </p>
      <div className="space-y-2">
        <Title label="Education" />
        <div className="space-y-2 divide-y divive-accent">
          {educations.map((education, index) => (
            <Education key={index} education={education} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
