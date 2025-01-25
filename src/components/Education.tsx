import { education } from "../types/Education";

type EducationProps = {
  education: education;
};

const Education = ({ education }: EducationProps) => {
  return (
    <div>
      <h2 className="text-lg font-bold">{education.course}</h2>
      <h3 className="text-md font-medium">
        {education.school_name} -{" "}
        <span>
          ({education.yearStart} -{" "}
          {education.isPresent ? "Present" : education.yearEnd})
        </span>
      </h3>
      <p>{education.address}</p>
    </div>
  );
};

export default Education;
