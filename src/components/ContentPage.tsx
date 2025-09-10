import About from '../Pages/About'
import Experiences from '../Pages/Experiences'
import Projects from '../Pages/Projects'
import Technology from '../Pages/Technology'
import { Page } from '../types/page'
type ContentPageProps = {
  page: Page
}
const ContentPage = ({ page }: ContentPageProps) => {
  switch (page) {
    case 'about':
      return <About />
    case 'experiences':
      return <Experiences />
    case 'projects':
      return <Projects />
    case 'technology':
      return <Technology />
    default:
      return null
  }
}

export default ContentPage
