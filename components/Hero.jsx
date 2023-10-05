import Image from 'next/image'
import {BsCheckCircleFill} from 'react-icons/bs'
import {FaUserMd,FaUserFriends,FaBroom} from 'react-icons/fa'
import DoctorSay from './DoctorSay'
import Link from 'next/link'

const Hero = () => {
  const content1 = "At Therapy Aid, we believe that genuine service is the cornerstone of a thriving community. We are excited to welcome you to our world of compassion, where we provide exceptional services designed to enhance the quality of life for individuals of all ages. With a steadfast commitment to nurturing physical, emotional, and mental well-being, we are dedicated to being the trusted hand you can always rely on. ";
  const content2 = "At Therapy Aid, we understand that every person is unique, and their needs, preferences, and circumstances are equally distinctive. That's why we offer a range of personalized services tailored to meet the specific requirements of each individual. Whether it's caring for seniors or providing assistance to those with disabilities, we are here to lighten the load and brighten lives"
  return (
    <section className=' relative mb-10'>
      <div className='w-full h-[500px] absolute top-0 -z-10  overflow-hidden object-contain'>
        <Image src={"/img/consulting2.png"} alt='Therapy Images' width={3280} height={200}  />
      </div>
      <div className=' grid  grid-cols-12 justify-around items-center gap-5
        pt-20 lg:pt-56 p-5 w-[100%] h-full' >

        <div className='col-span-12  lg:col-span-6 shadow-lg  p-5 lg:py-20 lg:px-10 rounded-xl  bg-gradient-to-tr from-cyan-500 to-blue-500 bg-opacity-5 '>
          <h1 className='xs:text-4xl md:text-3xl lg:w-[90%] font-semibold md:font-light capitalize '>Seeking highly-trained and experienced Allied health Assistants and support staff to help you achieve your goals?</h1>
          <div className='mt-5 py-5 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center  lg:gap-10 md:text-center text-sm'>
              
              <Points icon={"FaUserMd"} title={"Experienced Allied Health  Assistants"}/>
              <Points icon={"FaUserFriends"} title={"Well-Trained Support Workers"}/>
              <Points icon={"FaBroom"} title={"Cleaning staff"}/>
          
          </div>
        </div>
        <DoctorSay content={content1} links={"/contact"} LinkName={'Contact Now'}/>
        <DoctorSay content={content2}/>
        
      </div>
      {/* <div className='flex flex-col lg:flex-row flex-wrap p-5 items-center justify-center gap-3 md:gap-2 lg:gap-4  pt-20 lg:pt-52 w-[100%] h-full' >

        <div className=' shadow-lg  p-5 lg:py-20 lg:px-10 rounded-xl  bg-gradient-to-tr from-cyan-500 to-blue-500 bg-opacity-5 w-full lg:w-[40vw] lg:min-w-[700px]'>
          <h1 className='sm:text-xl md:text-3xl lg:text-4xl font-semibold capitalize '>Seeking highly-trained and experienced Allied health Assistants and support staff to help you achieve your goals?</h1>
          <div className='mt-5 py-5 flex flex-col gap-3 opacity-80 text-xs md:text-base lg:text-lg'>
            <h3 className='flex items-center  gap-2'><BsCheckCircleFill className='text-black'/> Experienced Allied Health  Assistants</h3>
            <h3 className='flex items-center  gap-2'><BsCheckCircleFill className='text-black'/>Well-Trained Support Workers</h3>
            <h3 className='flex items-center  gap-2'><BsCheckCircleFill className='text-black'/>Cleaning staff</h3>

          </div>
        </div>
        <DoctorSay content={content1}/>
        <DoctorSay content={content2}/>
        
      </div> */}
      
    </section>
  )
}
const Points = ({icon,title})=> {
  
  return(
    <Link  href={'/services'}>
      <div className='flex flex-row md:flex-col items-center  gap-3 md:justify-center border px-3 py-5 rounded-lg border-black
          hover:text-blue-300 hover:bg-slate-800 cursor-pointer transition-all ease-in'>
          {icon && (icon == "FaUserMd") && <FaUserMd className='text-4xl'/>}
          {icon && (icon == "FaUserFriends") && <FaUserFriends className='text-4xl'/>}
          {icon && (icon == "FaBroom") && <FaBroom className='text-4xl'/>}
        <h3 className='xs:text-xs md:text-base'>{title}</h3>
      </div>
    </Link>
  )
}

export default Hero