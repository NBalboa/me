
type ExperienceCompanyDetailProps = {
  company_name: string
  started: string,
  position: string,
  ended: string,
  isPresent?: boolean
}

const ExperienceCompanyDetail = ({
  company_name,
  started,
  ended,
  isPresent,
  position
}: ExperienceCompanyDetailProps) => {
  return (
    <div className="space-y-2">
      <h2 className="flex gap-2 items-center text-xl font-bold ">
        {company_name}
      </h2>
      <div>
        <h2 className="text-xl font-medium">
          {position}
        </h2>
        <h3 className="flex gap-2 items-center text-md italic">
          {started} - {isPresent ? "Present" : ended}
        </h3>
      </div>
    </div>
  )
}

export default ExperienceCompanyDetail
