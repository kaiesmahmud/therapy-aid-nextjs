'use client'

import Image from "next/image"
import { useState } from "react"

const ServiceCard = ({details}) => {
    const [open, setOpen] = useState(false)
  return (
    <div className="merkal_gradient shadow p-2 md:p-5 w-[100%] lg:w-[24%] md:min-w-[300px] lg:min-w-[400px] rounded-2xl text-grey-700 ">
        <div className=" w-full  overflow-hidden flex justify-center items-center  rounded-xl">
            <Image src={details.img} alt={details.title} width={800} height={600} className=" rounded-xl transition-all ease-in hover:scale-105 overflow-hidden"/>
        </div>
        <div className="mt-5">
            <hr className=" border-blue-800 mb-2"/>
            <h3 className="text-xl font-medium md:text-3xl lg:text-4xl mb-3">{details.title}</h3>
            <h4 className="text-md md:text-lg font-medium ">Purpose:</h4>
            <p className=" text-slate-800 roboto-font mb-2">{details.purpose}</p>
            {
                open && (
                    <div>
                        <h4 className="text-md md:text-lg font-medium ">Provide:</h4>
                        <p className=" text-slate-800 roboto-font mb-2">{details.provided}</p>
                    </div>
                )
            }
            {
                !open && (
                    <div onClick={()=> setOpen(true)} className='text-black/70  font-medium p-3 border border-slate-600 text-center rounded-lg hover:border-black hover:text-black transition-all ease-in cursor-pointer'>See Details</div>
                )
            }
            {
                open && (
                    <div onClick={()=> setOpen(false)} className='text-black/70  font-medium p-3 border border-slate-600 text-center rounded-lg hover:border-black hover:text-black transition-all ease-in cursor-pointer'>See Less</div>
                )
            }
        </div>
        {/* <div className=" w-full  overflow-hidden flex justify-center items-center  rounded-xl">
            <Image src={details.img} alt={details.title} width={800} height={600} className=" rounded-xl transition-all ease-in hover:scale-105 overflow-hidden"/>
        </div>
        <div className="mt-5">
            <h3 className="text-xl font-medium md:text-3xl lg:text-4xl mb-3">{details.title}</h3>
            <hr className=" border-blue-800 mb-2"/>
            <h4 className="text-md md:text-lg font-medium ">Purpose:</h4>
            <p className=" text-slate-800 roboto-font mb-2">{details.purpose}</p>
            <h4 className="text-md md:text-lg font-medium ">Provide:</h4>
            <p className=" text-slate-800 roboto-font">{details.provided}</p>
        </div> */}
    </div>
  )
}

export default ServiceCard