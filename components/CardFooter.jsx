import Link from 'next/link'
import {BsPeople} from 'react-icons/bs'

const CardFooter = ({member}) => {
  return (
        <div className="flex justify-evenly mt-5 text-xs">
            <div className="flex gap-2 roboto-font font-semibold items-center">
                <Link href={'/contact'}>
                    <div className="text-blue-500  rounded-xl p-2 bg-slate-200 px-5 hover:text-blue-700 hover:shadow-lg transition-all ease-in lg:text-lg">
                        Contact Now
                    </div>
                </Link>
                {/* <div className=" text-green-500  rounded-xl p-2 bg-slate-200 px-5">
                    Call Now
                </div> */}
            </div>
            {
                member && 
                <div className="flex gap-2 items-center justify-around rounded-xl p-2 bg-slate-200 px-5">
                    <BsPeople className=" text-lg"/>
                    : {member}
                </div>
            }
        </div>
  )
}

export default CardFooter