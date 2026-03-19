import About from '../Pages/About'
import Experiences from '../Pages/Experiences'
import Projects from '../Pages/Projects'
import Skills from '../Pages/Skills'
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
    case 'skills':
      return <Skills />
    default:
      return null
  }
}

export default ContentPage
