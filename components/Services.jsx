import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  const services = [
    {
      id:'01',
      title: 'Occupational Therapy (OT)',
      img: '',
      purpose: "Occupational therapy helps people of all ages with physical, sensory, or cognitive impairments regain or improve their ability to perform everyday activities or occupations.",
      provided: "Our Allied Health Assistant staff works with clients to improve fine motor skills, assist with adaptive equipment, and teach strategies to enhance independent living. We also address self-care skills such as toilet training and dressing, handwriting skills, and social skills such as making and maintaining friendships. Additionally, we work on gross motor skills, such as riding a bike or playing ball."
    },
    {
      id:'02',
      title: 'Speech Therapy',
      img: '',
      purpose: "Occupational therapy helps people of all ages with physical, sensory, or cognitive impairments regain or improve their ability to perform everyday activities or occupations.",
      provided: "Our Allied Health Assistant staff works with clients to improve fine motor skills, assist with adaptive equipment, and teach strategies to enhance independent living. We also address self-care skills such as toilet training and dressing, handwriting skills, and social skills such as making and maintaining friendships. Additionally, we work on gross motor skills, such as riding a bike or playing ball."
    },
    {
      id:'03',
      title: 'Physiotherapy (Physical Therapy)',
      img: '',
      purpose: "Occupational therapy helps people of all ages with physical, sensory, or cognitive impairments regain or improve their ability to perform everyday activities or occupations.",
      provided: "Our Allied Health Assistant staff works with clients to improve fine motor skills, assist with adaptive equipment, and teach strategies to enhance independent living. We also address self-care skills such as toilet training and dressing, handwriting skills, and social skills such as making and maintaining friendships. Additionally, we work on gross motor skills, such as riding a bike or playing ball."
    },
    {
      id:'04',
      title: 'Behaviour Therapy',
      img: '',
      purpose: "Occupational therapy helps people of all ages with physical, sensory, or cognitive impairments regain or improve their ability to perform everyday activities or occupations.",
      provided: "Our Allied Health Assistant staff works with clients to improve fine motor skills, assist with adaptive equipment, and teach strategies to enhance independent living. We also address self-care skills such as toilet training and dressing, handwriting skills, and social skills such as making and maintaining friendships. Additionally, we work on gross motor skills, such as riding a bike or playing ball."
    },
  ]
  return (
    <section className=' min-h-screen py-10'>
      <h2 className='text-center text-3xl font-semibold md:text-4xl lg:text-6xl my-10'>Our Services:</h2>
      <div className='flex flex-col flex-wrap lg:flex-row items-center justify-center gap-2 p-3'>
        {
          services.map((service)=>(
            <ServiceCard key={service.id} details={service}/>
          ))
        }
        
      </div>
    
    </section>
  )
}

export default Services