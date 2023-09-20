import { Hero, Navbar } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="xs:text-xs md:text-sm lg:text-base">
      
      <Navbar/>
      <Hero/>
      <p className='roboto-font text-[50px]'>Therapy Aid</p>
      <p className=' text-[50px] min-h-screen'>Therapy Aid</p>
    </main>
  )
}
