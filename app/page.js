import { CareSupportService, Hero, MoreServices, NeedService, Services } from '@/components'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="xs:text-xs md:text-sm lg:text-base max-w-[4000px]">
      <Hero/>
      <Services/>
      <NeedService/>
      <MoreServices/>
      <CareSupportService/>
    </main>
  )
}
