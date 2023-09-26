import Image from "next/image"
import CardFooter from "./CardFooter"

const MoreServicesCard = ({details}) => {
  return (
    <div className=" bg-slate-200/60 shadow-xl p-2 md:p-5 w-[100%]  rounded-lg text-grey-700 flex flex-col gap-5 justify-between ">
      <div>
        <div className=" w-full  overflow-hidden flex justify-center items-center  rounded-lg">
            <Image src={details.img} alt={details.title} width={800} height={600} className=" rounded-lg transition-all ease-in hover:scale-105 overflow-hidden"/>
        </div>
        <div className="my-5 text-xs flex flex-col justify-between">
            <hr className=" border-black mb-2"/>
            <h3 className="text-xl font-medium md:text-2xl lg:text-3xl  mb-3">{details.title}</h3>
            <p className="text-sm md:text-base lg:text-lg font-light text-slate-700">{details.description}</p>
        </div>
      </div>
        <CardFooter member={details.member}/>            
    </div>
  )
}

export default MoreServicesCard