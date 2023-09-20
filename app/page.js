import { Footer, Hero, Navbar, Services } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="xs:text-xs md:text-sm lg:text-base ">
      
      <Navbar/>
      <Hero/>
      <Services/>
      <Footer/>
    </main>
  )
}
