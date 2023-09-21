import Image from "next/image"
import {BsPeople} from 'react-icons/bs'
const MoreServicesCard = ({details}) => {
  return (
    <div className="bg-slate-100 shadow-xl p-2 md:p-5 w-[100%] lg:w-[24%] md:min-w-[300px] lg:min-w-[400px] rounded-lg text-grey-700 ">
        <div className=" w-full  overflow-hidden flex justify-center items-center  rounded-lg">
            <Image src={details.img} alt={details.title} width={800} height={600} className=" rounded-lg transition-all ease-in hover:scale-105 overflow-hidden"/>
        </div>
        <div className="mt-5 text-xs flex flex-col justify-between">
            <hr className=" border-black mb-2"/>
            <h3 className="text-lg font-medium md:text-3xl  mb-3">{details.title}</h3>
            <p className="md:text-lg lg:text-xl text-slate-600">{details.description}</p>
            <div className="flex justify-between mt-5">
                <div className="flex gap-5 md:text-lg roboto-font font-semibold items-center">
                    <div className="text-blue-500  rounded-xl p-3 bg-slate-200 px-5">
                        Contact Now
                    </div>
                    <div className=" text-green-500  rounded-xl p-3 bg-slate-200 px-5">
                        Call Now
                    </div>
                </div>
                <div className="flex gap-3  md:text-xl items-center justify-around rounded-xl p-3 bg-slate-200 px-5">
                    <BsPeople className="md:text-2xl text-lg"/>
                    : {details.member}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default MoreServicesCard