import Image from 'next/image'
import Link from 'next/link'
import {BsCheckCircleFill} from 'react-icons/bs'
import DoctorSay from './DoctorSay'

const Hero = () => {
  return (
    <section className=' relative '>
      <div className='w-full h-[500px] absolute top-0 -z-10  overflow-hidden object-contain'>
        <Image src={"/consulting2.png"} alt='Therapy Images' width={3280} height={200}  />
      </div>
      <div className=' flex flex-col lg:flex-row flex-wrap p-5 items-center justify-center gap-1 md:gap-2 lg:gap-4  pt-20 lg:pt-52 w-[100%] h-full' >

        <div className=' shadow-lg  p-5 lg:py-20 lg:px-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-500 bg-opacity-5 w-full lg:w-[40vw] lg:min-w-[600px]'>
          <h1 className='sm:text-xl md:text-3xl lg:text-4xl font-semibold capitalize'>Seeking highly-trained and experienced Allied health Assistants and support staff to help you achieve your goals?</h1>
          <div className='mt-5 py-5 flex flex-col gap-3 opacity-80 text-xs md:text-base '>
            <h3 className='flex items-center  gap-2'><BsCheckCircleFill className='text-green-500'/> Experienced Allied Health  Assistants</h3>
            <h3 className='flex items-center  gap-2'><BsCheckCircleFill className='text-green-500'/>Well-Trained Support Workers</h3>
            <h3 className='flex items-center  gap-2'><BsCheckCircleFill className='text-green-500'/>Cleaning staff</h3>

          </div>
        </div>
        <DoctorSay/>
        <DoctorSay/>
        
      </div>
      
    </section>
  )
}

export default Hero