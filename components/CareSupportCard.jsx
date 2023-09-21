import Icons from "./Icons"

const CareSupportCard = ({data:{title,icon,description}}) => {
  return (
    <div className="  select-none p-3 md:p-5  bg-slate-50 rounded-lg shadow hover:shadow-xl flex flex-col justify-center items-center">
        <div className="text-5xl md:text-[8rem]">
            <Icons icon={icon}/>
        </div>
        <h4 className="md:text-lg lg:text-xl font-medium py-2 text-center">{title}</h4>
        {/* <p className=" text-justify">{description}</p> */}
    </div>
  )
}

export default CareSupportCard