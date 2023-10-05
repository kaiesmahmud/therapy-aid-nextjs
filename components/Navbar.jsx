'use client'
import Link from "next/link"
import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {HiBars3BottomRight} from 'react-icons/hi2'
import {RxCross1} from 'react-icons/rx'
import { useState } from "react"

const Navbar = () => {
    
  const [open, setOpen] = useState(false)
  return (
    <header className=" bg-white/20 shadow-lg backdrop-blur-2xl sticky top-0 z-[1000]">
      <nav className="flex justify-between items-center px-3 md:px-5 lg:px-7 py-3">
        <Link href={'/'} className="text-lg md:text-xl lg:text-3xl xl:text-4xl font-bold">
          <img src="/img/home-icon.png" alt="Therapy-AID home" className="max-w-[200px]" />
        </Link>
        <div className="md:hidden text-2xl cursor-pointer" onClick={()=>setOpen(!open)}>
          {
            !open ? 
            <HiBars3BottomRight className="text-4xl"/>
            :
            <RxCross1/>
          }
        </div>
        <div className="hidden  md:grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 items-center md:text-lg lg:text-xl text-center font-normal">
          <Link href={'/experience'} className="p-2 md:p-3 lg:p-4  hover:bg-slate-100 rounded  transition-colors ease-in">Experience</Link>
          <Link href={'/services'} className="p-2 md:p-3 lg:p-4  hover:bg-slate-100 rounded  transition-colors ease-in">Services</Link>
          <Link href={'/contact'} className="p-2 md:p-3 lg:p-4  rounded hover:bg-teal-800 hover:text-white transition-colors ease-in">Contact</Link>
        </div>
        <div className="hidden md:flex gap-2 md:gap-4 lg:gap-6 xl:gap-8 justify-end items-center md:text-3xl lg:text-4xl">
          <Link href={'/'} className="rounded-full shadow-lg p-1 overflow-hidden">
            <BsFacebook className="text-blue-500 "/>
          </Link>
          <Link href={'/'} className="rounded shadow-lg p-1 overflow-hidden">
            <BsInstagram className='text-pink-500' />
          </Link>
          <Link href={'/'} className="rounded-full shadow-lg p-1 overflow-hidden">
            <BsTwitter className="text-sky-500"/>
          </Link>
          <Link href={'/'} className="rounded shadow-lg p-2 overflow-hidden">
            <BsLinkedin className="text-blue-500"/>
          </Link>
        </div>
      </nav>
      {
        open && 
        <div className=" min-h-[92vh] max-h-[96vh] sticky md:hidden">
          <div className="grid grid-cols-1 gap-10  items-center md:text-lg lg:text-xl text-center font-normal" onClick={()=>setOpen(!open)}>
            <Link href={'/experience'} className="p-2 hover:bg-slate-800  hover:text-white transition-colors ease-in">Experience</Link>
            <Link href={'/services'} className="p-2 hover:bg-slate-800  hover:text-white transition-colors ease-in">Services</Link>
            <Link href={'/contact'} className="p-2  hover:bg-slate-800 hover:text-white transition-colors ease-in">Contact</Link>
            <div className="flex gap-10 justify-center items-center text-2xl p-2">
                <Link href={'/'} className="rounded-full shadow-lg p-2 overflow-hidden">
                  <BsFacebook className="text-blue-500 "/>
                </Link>
                <Link href={'/'} className="rounded shadow-lg p-2 overflow-hidden">
                  <BsInstagram className='text-pink-500' />
                </Link>
                <Link href={'/'} className="rounded-full shadow-lg p-2 overflow-hidden">
                  <BsTwitter className="text-sky-500"/>
                </Link>
                <Link href={'/'} className="rounded shadow-lg p-2 overflow-hidden">
                  <BsLinkedin className="text-blue-500"/>
                </Link>
            </div>
          </div>
        </div>
      }
    </header>
  )
}

export default Navbar