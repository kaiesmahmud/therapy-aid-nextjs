'use client'

import Image from "next/image"
import { useState } from "react"
import CardFooter from "./CardFooter"

const ServiceCard = ({details,i}) => {
    const [open, setOpen] = useState(false)
  return (
    <div className={`${(i%2==0)? 'bg-sky-100' : "bg-pink-100"} shadow-lg p-2 md:p-5  rounded-lg text-grey-700 transition-all ease-in duration-200 flex flex-col justify-between`}>
        <div className=" w-full  overflow-hidden flex justify-center items-center  rounded-lg">
            <Image src={details.img} alt={details.title} width={800} height={600} className=" rounded-lg transition-all ease-in hover:scale-105 overflow-hidden"/>
        </div>
        <div className="mt-5 text-xs">
            <hr className=" border-blue-800 mb-2"/>
            <h3 className="text-base md:text-2xl lg:text-3xl font-medium mb-3">{details.title}</h3>
            <h4 className="text-sm md:text-lg font-medium ">Purpose:</h4>
            <p className="text-xs lg:text-md text-slate-800 mb-2 font-light text-justify leading-5 p-2">{details.purpose}</p>
            {
                open && (
                    <div>
                        <h4 className="text-sm md:text-lg font-medium ">Provide:</h4>
                        <p className="text-xs lg:text-md text-slate-800  mb-2 font-light text-justify leading-5 p-1">{details.provided}</p>
                        <CardFooter member={details.member}/>
                        <div onClick={()=> setOpen(false)} className='text-black/70  font-medium mt-5 p-2 border border-slate-600 text-center rounded-lg hover:border-black hover:text-black transition-all ease-in cursor-pointer text-xs'>See Less</div>
                    </div>
                )
            }
            
        </div>
        {
            !open && (
                <div onClick={()=> setOpen(true)} className='text-black/70  font-medium p-2 border border-slate-600 text-center rounded-lg hover:border-black hover:text-black transition-all ease-in cursor-pointer text-xs '>See Details</div>
            )
        }
    </div>
  )
}

export default ServiceCard