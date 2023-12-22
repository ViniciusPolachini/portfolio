import { projects } from '@/data/data';
import VisitCard from '@/components/visitCard/visitCard'
import Portfolio from '@/components/portifolio/portfolio'

export default function Home() {
  return (
    <div className='h-screen'>
      <VisitCard/>
      <Portfolio
      title='Projetos'
      projects={projects}
      />
    </div>
  )
}
