import { Hero, MoreServices, Services } from '@/components'

export default function Home() {
  return (
    <main className="xs:text-xs md:text-sm lg:text-base ">
      <Hero/>
      <Services/>
      <div className='old_gradient py-20'>
        <h3 className='text-center text-3xl font-semibold md:text-4xl lg:text-6xl my-10'>Need our Service? </h3>
        <p>Call Us</p>
      </div>
      <MoreServices/>
    </main>
  )
}
