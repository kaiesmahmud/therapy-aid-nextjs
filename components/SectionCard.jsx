import Image from "next/image"
import Link from "next/link"

const SectionCard = ({img,title,description,index,btn}) => {
  return (
    <div id={index} >
        <div  className={`grid grid-cols-1 md:grid-cols-2 gap-5 p-5 content-start justify-center min-h-screen/80 ${index > 0 ? "pt-40" : 'md:pt-36 pt-20'}`}>
            <div className={`object-contain rounded overflow-hidden ${index% 2 != 0  && 'md:order-2'}`}>
                <Image loading="eager" className="w-full" width={4000} height={3000} src={img} alt={description} />
            </div>
            <div className={`${index%2 != 0 && " md:order-1 "} flex flex-col gap-10 p-5`}>
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-8">{title}</h1>
                <p className="text-sm md:text-base font-light leading-4 text-justify w-[90%]">{description}</p>
                {
                    btn && 
                    <Link href={'/contact'} >
                        <div className="py-4 px-3 rounded bg-slate-300 inline-block hover:bg-slate-700 hover:text-white font-semibold transition-all ease-in">
                        Contact Now
                        </div>
                    </Link>
                }
            </div>
        </div>
    </div>
  )
}

export default SectionCard