import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row gap-5 items-center justify-center p-5'>
      <p>
      Copyright &copy;2023 All Right Researved | Therapy AID
      </p>
      <div className=' font-semibold flex flex-wrap items-center justify-center gap-5'>
        <p>Home</p>
        <p>Experience</p>
        <p>Services</p>
        <p>Contact</p>
      </div> 
    </footer>
  )
}

export default Footer