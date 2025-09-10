import Title from "../components/Title"
import { useExperiences } from "../hooks/useExperiences"
const Experiences = () => {
  const { experiences } = useExperiences()

  return (
    <div>
      <Title label="Experiences" />
      <div className="space-y-2 mt-2 text-foreground">
        {experiences.map((experience) => (
          <>
            <div>
              <h2 className="flex gap-2 items-center text-xl font-bold ">
                {experience.company_name}, {experience.positon}
              </h2>
              <h3 className="flex gap-2 items-center text-md italic">
                {experience.started} - {experience.isPresent ? "Present" : experience.ended}
              </h3>
            </div>
            <div>
              <div className="text-justify ms-5 ">
                <ul className="list-disc space-y-2">
                  {experience.higlights.map((highlight) => (
                    <>
                      <li>{highlight}</li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>

  )
}

export default Experiences
