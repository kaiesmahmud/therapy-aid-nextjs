
const ServiceCard = ({details}) => {
  return (
    <div className="merkal_gradient shadow-lg border p-5 lg:p-10 rounded-lg w-[100%] lg:w-[40%]">
        <h3 className="text-lg font-medium md:text-3xl lg:text-4xl">{details.title}</h3>
        <h4 className="text-md md:text-lg font-medium ">Purpose:</h4>
        <p className=" text-opacity-50">{details.purpose}</p>
        <h4 className="text-md md:text-lg font-medium ">Provide:</h4>
        <p className=" text-opacity-50">{details.provided}</p>
    </div>
  )
}

export default ServiceCard