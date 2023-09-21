import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row gap-10 items-center justify-center p-5'>
      
      <div className=' font-semibold flex flex-wrap items-center justify-center gap-5'>
        <Link href={'/'}>Home</Link>
        <Link href={'/experience'} >Experience</Link>
        <Link href={'/services'} >Services</Link>
        <Link href={'/contact'} >Contact</Link>
      </div> 
      <p className='text-xs '>
      Copyright &copy;2023 All Right Researved | Therapy AID
      </p>
    </footer>
  )
}

export default Footer