type HighlightProps = {
  highlight: string
}

const Highlight = ({ highlight }: HighlightProps) => {
  return (
    <div >
      <li>{highlight}</li>
    </div>
  )
}

export default Highlight
