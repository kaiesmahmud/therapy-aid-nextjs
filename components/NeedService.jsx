import Image from "next/image"
import Link from "next/link"

const NeedService = () => {
  return (
    <div className='scream_gradient py-20  flex flex-col md:flex-row justify-center items-center'>
        <div className="flex justify-end items-center">
            <Image src={'/needservice.png'} width={500} height={500} loading="lazy" alt="therapy aid logo"/>
        </div>
        <div className="flex flex-col justify-start items-start  md:border-l px-5 border-black">
            <h3 className=' text-3xl font-semibold md:text-4xl lg:text-6xl my-10'>Need our Service? </h3>
            <div className='flex flex-col p-3'>
                <p className='md:text-xl'>Call us at</p>
                <p className=' font-bold text-xl md:text-3xl '>0 4 5 5 1 5 4 8 3 3</p>
                <p>or</p>
                <a href={'tel:0455154833'}>
                    <div className='text-center p-5 my-5 rounded-lg font-bold text-lg bg-green-600 text-slate-900 cursor-pointer shadow-xl hover:bg-green-500 hover:text-slate-800 transition-all ease-in'>Click Here to CALL</div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default NeedService