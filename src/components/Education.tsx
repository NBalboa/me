import { Education as EDUCATION_TYPE } from "../types/Education";

type EducationProps = {
  education: EDUCATION_TYPE;
};

const Education = ({ education }: EducationProps) => {
  return (
    <div className="text-foreground">
      <h2 className="text-lg font-bold mt-2">{education.course}</h2>
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
