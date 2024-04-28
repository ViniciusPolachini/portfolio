import { projects } from '@/data/data';
import VisitCard from '@/components/visitCard/visitCard'
import Portfolio from '@/components/portifolio/portfolio'
import AboutMe from '@/components/AboutMe/aboutMe';

export default function Home() {
  return (
    <div className='h-screen'>
      <VisitCard/>
      <AboutMe/>
      <Portfolio
      title='Projetos'
      projects={projects}
      />
    </div>
  )
}
