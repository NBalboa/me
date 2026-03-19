import ExperienceCompanyDetail from "../components/ExperienceCompanyDetail"
import Highlights from "../components/Highlights"
import Title from "../components/Title"
import { useExperiences } from "../hooks/useExperiences"
const Experiences = () => {
  const { experiences } = useExperiences()

  return (
    <div>
      <Title label="Experiences" />
      <div className="space-y-2 mt-2 text-foreground">
        {experiences.map((experience, idx) => (
          <div key={idx} className="space-y-2">
            <ExperienceCompanyDetail
              company_name={experience.company_name}
              ended={experience.ended}
              started={experience.started}
              isPresent={experience.isPresent}
              position={experience.positon}
            />
            <Highlights highlights={experience.higlights} />
          </div>
        ))}
      </div>
    </div>

  )
}

export default Experiences
