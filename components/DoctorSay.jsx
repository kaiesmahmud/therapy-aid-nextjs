import Image from 'next/image'
import Link from 'next/link'

const DoctorSay = () => {
  return (
    <div className='shadow-lg p-5 lg:py-20 lg:px-10 rounded-xl  bg-gradient-to-tr from-cyan-500 to-blue-500 flex flex-col gap-5 md:gap-8 lg:gap-10 w-[100%] lg:w-[25%] lg:min-w-[500px] text-xs md:text-base font-light roboto-font'>
        <div className=' object-contain w-[100px] h-[100px] overflow-hidden flex items-center rounded-full'>
        <Image src={'/doctor.jpg'} alt='doctor' width={100} height={100}/>
        </div>
        <article>
        At Therapy Aid, we believe that genuine service is the cornerstone of a thriving community. We are excited to welcome you to our world of compassion, where we provide exceptional services designed to enhance the quality of life for individuals of all ages. With a steadfast commitment to nurturing physical, emotional, and mental well-being, we are dedicated to being the trusted hand you can always rely on.

        </article>
        <Link href={'/about'}>
        <div>
            Learn More
        </div>
        </Link>
    </div>
  )
}

export default DoctorSay