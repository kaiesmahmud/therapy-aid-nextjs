import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  const services = [
    {
      id:'01',
      title: 'Occupational Therapy',
      img: '/service1.png',
      purpose: "Occupational therapy helps people of all ages with physical, sensory, or cognitive impairments regain or improve their ability to perform everyday activities or occupations.",
      provided: "Our Allied Health Assistant staff works with clients to improve fine motor skills, assist with adaptive equipment, and teach strategies to enhance independent living. We also address self-care skills such as toilet training and dressing, handwriting skills, and social skills such as making and maintaining friendships. Additionally, we work on gross motor skills, such as riding a bike or playing ball.",
      member:'27',
    },
    {
      id:'02',
      title: 'Speech Therapy',
      img: '/service2.png',
      purpose: "Occupational therapy helps people of all ages with physical, sensory, or cognitive impairments regain or improve their ability to perform everyday activities or occupations.",
      provided: "Our Allied Health Assistant staff works with clients to improve fine motor skills, assist with adaptive equipment, and teach strategies to enhance independent living. We also address self-care skills such as toilet training and dressing, handwriting skills, and social skills such as making and maintaining friendships. Additionally, we work on gross motor skills, such as riding a bike or playing ball.",
      member:'33',

    },
    {
      id:'03',
      title: 'Physiotherapy',
      img: '/service3.jpg',
      purpose: "Occupational therapy helps people of all ages with physical, sensory, or cognitive impairments regain or improve their ability to perform everyday activities or occupations.",
      provided: "Our Allied Health Assistant staff works with clients to improve fine motor skills, assist with adaptive equipment, and teach strategies to enhance independent living. We also address self-care skills such as toilet training and dressing, handwriting skills, and social skills such as making and maintaining friendships. Additionally, we work on gross motor skills, such as riding a bike or playing ball.",
      member:'48',

    },
    {
      id:'04',
      title: 'Behaviour Therapy',
      img: '/service4.jpg',
      purpose: "Occupational therapy helps people of all ages with physical, sensory, or cognitive impairments regain or improve their ability to perform everyday activities or occupations.",
      provided: "Our Allied Health Assistant staff works with clients to improve fine motor skills, assist with adaptive equipment, and teach strategies to enhance independent living. We also address self-care skills such as toilet training and dressing, handwriting skills, and social skills such as making and maintaining friendships. Additionally, we work on gross motor skills, such as riding a bike or playing ball.",
      member:'23',

    },
  ]
  return (
    <section id={"services"} className=' min-h-[85vh] py-10'>
      <h2 className='text-center text-3xl font-semibold md:text-4xl lg:text-6xl my-10'>Our Services:</h2>
      <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-5 p-10 md:p-3 '>
        {
          services.map((service,i)=>(
            <ServiceCard key={service.id} i={i} details={service}/>
          ))
        }
      </div>
      {/* <div className='flex flex-col flex-wrap lg:flex-row items-start justify-center gap-5 p-3'>
        {
          services.map((service,i)=>(
            <ServiceCard key={service.id} i={i} details={service}/>
          ))
        }
      </div> */}
    </section>
  )
}

export default Services