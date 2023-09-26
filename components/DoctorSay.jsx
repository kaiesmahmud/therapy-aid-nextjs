// import Image from 'next/image'
import Link from 'next/link'
import {RiUserHeartLine} from 'react-icons/ri'
import {GrUserExpert} from 'react-icons/gr'

const DoctorSay = ({content,links,LinkName}) => {
  return (
    <div className='col-span-12 sm:col-span-6 lg:col-span-3 shadow-lg p-5 lg:py-10 lg:px-5 rounded-xl  bg-gradient-to-tr from-cyan-500 to-blue-500 flex flex-col gap-5 md:gap-8 lg:gap-10  text-sm md:text-base  font-light roboto-font'>
        {/* <div className=' object-contain w-[100px] h-[100px] overflow-hidden flex items-center rounded-full'>
          <Image src={'/doctor.jpg'} alt='doctor' width={100} height={100}/>
        </div> */}
        {
          !links &&
          <div className=' flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl '>
            <div className=' border-4 border-slate-900 text-slate-900 rounded-full inline-block p-5'>
              <RiUserHeartLine />
            </div>
          </div>
        }
        {
          links &&
          <div className=' flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl '>
            <div className=' border-4 border-slate-900 text-slate-900 rounded-full inline-block p-5'>
              <GrUserExpert />
            </div>
          </div>
        }
        <article className=' text-justify capitalize text-black/80'> 
                {content} 
        </article>
        { 
          !links &&
          <Link href={'/experience'}>
            <div className='text-black/70  font-medium p-3 border border-slate-600 text-center rounded-lg hover:text-blue-300 hover:bg-slate-800 cursor-pointer transition-all ease-in'>
                Learn More
            </div>
        </Link>}
        { 
          links &&
          <Link href={links}>
            <div className='text-black/70  font-medium p-3 border border-slate-600 text-center rounded-lg hover:text-blue-300 hover:bg-slate-800 cursor-pointer transition-all ease-in'>
                {LinkName}
            </div>
        </Link>}
    </div>
    // <div className='shadow-lg p-5 lg:py-16 lg:px-10 rounded-xl  bg-gradient-to-tr from-cyan-500 to-blue-500 flex flex-col gap-5 md:gap-8 lg:gap-10 w-[100%] lg:w-[25%] lg:min-w-[450px] text-xs md:text-base lg:text-lg font-light roboto-font'>
    //     <div className=' object-contain w-[100px] h-[100px] overflow-hidden flex items-center rounded-full'>
    //     <Image src={'/doctor.jpg'} alt='doctor' width={100} height={100}/>
    //     </div>
    //     <article className=' text-justify'> {content} </article>
    //     <Link href={'/experience'}>
    //         <div className='text-black/70  font-medium p-3 border border-slate-600 text-center rounded-lg hover:border-black hover:text-black transition-all ease-in'>
    //             Learn More
    //         </div>
    //     </Link>
    // </div>
  )
}

export default DoctorSay