import './global.css'
import Homes from 'components/homes'

export default function Home() {
  return (
    <div className='snap-y snap-mandatory overflow-scroll'>
    <section id='hero' className='snap-center' >
      <Homes />
    </section>

    <section className='bg-green-900 h-screen'>

    </section>
    </div>
  )
}
