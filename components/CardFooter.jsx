import {BsPeople} from 'react-icons/bs'

const CardFooter = ({member}) => {
  return (
        <div className="flex justify-between mt-5">
            <div className="flex gap-5 md:text-lg roboto-font font-semibold items-center">
                <div className="text-blue-500  rounded-xl p-3 bg-slate-200 px-5">
                    Contact Now
                </div>
                <div className=" text-green-500  rounded-xl p-3 bg-slate-200 px-5">
                    Call Now
                </div>
            </div>
            {
                member && 
                <div className="flex gap-3  md:text-xl items-center justify-around rounded-xl p-3 bg-slate-200 px-5">
                    <BsPeople className="md:text-2xl text-lg"/>
                    : {member}
                </div>
            }
        </div>
  )
}

export default CardFooter