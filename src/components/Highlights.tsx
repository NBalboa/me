import Highlight from './Highlight'

type HighlightsProps = {
  highlights: string[]
}

const Highlights = ({ highlights }: HighlightsProps) => {
  return (
    <div>
      <div className="text-justify ms-5 ">
        <ul className="list-disc space-y-2">
          {highlights.map((highlight, idx) => (
            <Highlight key={idx} highlight={highlight} />
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Highlights
