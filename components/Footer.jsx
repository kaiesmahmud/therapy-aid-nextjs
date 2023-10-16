import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row gap-10 items-center justify-center p-5'>
      
      <div className=' font-semibold flex flex-wrap items-center justify-center gap-5 text-xs md:text-sm lg:text-md'>
        <Link href={'/'} className='border-r pr-3 border-slate-700'>Home</Link>
        <Link href={'/experience'} className='border-r pr-3 border-slate-700'>Experience</Link>
        <Link href={'/services'} className='border-r pr-3 border-slate-700' >Services</Link>
        <Link href={'/contact'} >Contact</Link>
      </div> 
      <p className='text-xs '>
      Copyright &copy;2023 All Right Researved | Therapy AID
      </p>
      <a href="mailto:contact@therapyaid.com.au"> Mail us at: <span className=' font-semibold'>contact@therapyaid.com.au</span></a>
    </footer>
  )
}

export default Footer