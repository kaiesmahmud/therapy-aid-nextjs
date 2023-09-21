import {GiHealthNormal,GiPill ,GiFruitBowl} from  'react-icons/gi'
import {MdOutlineAssistWalker} from  'react-icons/md'
import {BsHearts} from  'react-icons/bs'
const Icons = ({icon}) => {
    switch (icon) {
        case "GiHealthNormal":
            return( <GiHealthNormal className='text-red-500'/>)
        case "GiPill":
            return( <GiPill className='text-blue-500'/>)
        case "GiFruitBowl":
            return( <GiFruitBowl className=' text-green-700'/>)
        case "MdOutlineAssistWalker":
            return( <MdOutlineAssistWalker className=' text-amber-700'/>)
        case "BsHearts":
            return( <BsHearts className=' text-pink-600'/>)
            
        default:
            return( <BsHearts/>)
    }
}

export default Icons