import { CareSupportService, Hero, MoreServices, NeedService, Services, Verifications } from '@/components'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="xs:text-xs md:text-sm lg:text-base max-w-[4000px]">
      {/* <head>
        <meta name="google-site-verification" content="QWY1y6k9SMN1td9xI2fQ_F0Fi8Oop8eyhTcWaXYkxNQ" />
      </head> */}
      <Hero/>
      <Services/>
      <NeedService/>
      <MoreServices/>
      <CareSupportService/>
      <Verifications/>
    </main>
  )
}
