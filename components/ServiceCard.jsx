import Image from "next/image"

const ServiceCard = ({details}) => {
  return (
    <div className="merkal_gradient shadow p-5 w-[100%] lg:w-[40%] rounded-2xl text-grey-700">
        <div className=" w-full  overflow-hidden flex justify-center items-center  rounded-xl">
            <Image src={details.img} alt={details.title} width={800} height={600} className=" rounded-xl transition-all ease-in hover:scale-105 overflow-hidden"/>
        </div>
        <div className="mt-5">
            <h3 className="text-lg font-medium md:text-3xl lg:text-4xl mb-3">{details.title}</h3>
            <hr className=" border-blue-800 mb-2"/>
            <h4 className="text-md md:text-lg font-medium ">Purpose:</h4>
            <p className=" text-slate-800 roboto-font mb-2">{details.purpose}</p>
            <h4 className="text-md md:text-lg font-medium ">Provide:</h4>
            <p className=" text-slate-800 roboto-font">{details.provided}</p>
        </div>
    </div>
  )
}

export default ServiceCard