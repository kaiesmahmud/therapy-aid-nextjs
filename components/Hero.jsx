import Image from 'next/image'
import Link from 'next/link'
import {BsCheckCircleFill} from 'react-icons/bs'

const Hero = () => {
  return (
    <section>
      <div className='flex p-5 items-center gap-1 md:gap-2 lg:gap-4'>
        <div className=' shadow-lg p-3 md:p-5 rounded-xl bg-slate-100'>
          <h1 className='sm:text-xl md:text-3xl lg:text-4xl font-light'>Seeking highly-trained and experienced Allied health Assistants and support staff to help you achieve your goals?</h1>
          <div className='py-5 flex flex-col gap-3'>
            <h3 className='flex items-center  gap-2'><BsCheckCircleFill className='text-green-500'/> Experienced Allied Health  Assistants</h3>
            <h3 className='flex items-center  gap-2'><BsCheckCircleFill className='text-green-500'/>Well-Trained Support Workers</h3>
            <h3 className='flex items-center  gap-2'><BsCheckCircleFill className='text-green-500'/>Cleaning staff</h3>

          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa maiores eum quod nihil aut possimus laborum aperiam incidunt porro. Veritatis suscipit delectus dignissimos quos amet molestias porro est, possimus rem.
        </div>
        <div>
          <div>

          </div>
          <Link href={'/about'}>
            <div>
              Learn More
            </div>
          </Link>
        </div>
      </div>
      <div className='w-full h-[400px]  overflow-hidden object-contain'>
        <Image src={"https://images.unsplash.com/photo-1600427652630-f97cc4db10cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"} alt='Therapy Images' width={3280} height={200}  />
      </div>
    </section>
  )
}

export default Hero