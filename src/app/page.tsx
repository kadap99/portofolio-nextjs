import './global.css'
import Homes from 'components/homes'
import Profil from 'components/profil'
import Skill from 'components/skill'

export default function Home() {
  return (
    <div className='snap-y snap-mandatory '>
    <section id='hero' className='snap-start' >
      <Homes />
    </section>

    <section id='profil' className='snap-center'>
      <Profil />
    </section>

    <section id='skill' className='snap-center '>
      <Skill />
    </section>
    </div>
  )
}
