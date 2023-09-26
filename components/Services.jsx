import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  const services = [
    {
      id:'01',
      title: 'Occupational Therapy',
      img: '/service1.png',
      purpose: "Occupational therapy, commonly referred to as OT, serves as a vital resource for individuals of all age groups who confront physical, sensory, or cognitive challenges in their daily lives. Its primary objective is to facilitate the recovery or enhancement of their ability to engage in everyday activities, often referred to as occupations.",
      provided: "Our dedicated team of Allied Health Assistants collaborates closely with clients to address a broad spectrum of needs. We focus on refining fine motor skills, providing guidance on adaptive equipment, and imparting effective strategies to promote independent living. Furthermore, our services extend to fostering self-care abilities, encompassing tasks like toilet training and dressing, as well as honing crucial social skills, such as building and maintaining meaningful friendships. Additionally, we actively work on enhancing gross motor skills, which encompass activities like bike riding and sports involving ball play.",
      member:'27',
    },
    {
      id:'02',
      title: 'Speech Therapy',
      img: '/service2.png',
      purpose: "Speech therapy, or speech-language pathology, assumes a pivotal role in assisting individuals grappling with communication and swallowing disorders. Its central mission is to empower these individuals with the tools and techniques needed to overcome these challenges.",
      provided: "At our institution, our highly skilled Allied Health Assistant staff meticulously adhere to the client's speech therapist session notes and individualized goals. This approach allows us to tailor our services precisely to each client's unique needs, promoting substantial progress in their speech and communication abilities. Moreover, we actively engage in the implementation of Augmentative and Alternative Communication (AAC), spanning Low-tech AAC, Mid-tech AAC, and High-tech AAC. This innovative approach empowers both children and adults to effectively express their ideas, thoughts, and desires, ultimately enhancing their quality of life.",
      member:'33',

    },
    {
      id:'03',
      title: 'Physiotherapy',
      img: '/service3.jpg',
      purpose: "Physiotherapy, often known as Physical Therapy, plays a pivotal role in assisting individuals in restoring and sustaining physical function and mobility. Its core objective is to empower individuals to achieve optimal physical well-being.",
      provided: "Our dedicated team of Allied Health Assistants collaborates seamlessly with our clients' Physiotherapists to offer comprehensive support. Our focus spans a range of areas, starting with early developmental milestones like rolling, sitting, and crawling. As clients progress, we continue to provide guidance, helping them attain later milestones such as walking, running, and jumping. Additionally, our services encompass addressing muscle weakness and tightness, improving joint alignment, and refining movement patterns. Through this holistic approach, we facilitate our clients' journey towards enhanced physical function.",
      member:'48',

    },
    {
      id:'04',
      title: 'Behaviour Therapy',
      img: '/service4.jpg',
      purpose: "Behavior therapy represents a crucial facet of our services, as our Allied Health Assistant staff partners closely with both clients' parents and behavior therapists. Together, we tackle the complex challenge of addressing behavioral issues and fostering positive outcomes.",
      provided: "Our team works diligently in collaboration with parents and behavior therapists to develop effective strategies for addressing and managing our clients' behavioral concerns. Through structured interventions and evidence-based techniques, we aim to promote positive behavior patterns and improved overall well-being. Our holistic approach places the client at the center, ensuring a comprehensive and supportive environment for their growth and development.",
      member:'23',

    },
  ]
  return (
    <section id={"services"} className=' min-h-[85vh] py-10'>
      <h2 className='text-center text-3xl font-semibold md:text-4xl lg:text-6xl my-10'>Our Services:</h2>
      <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 justify-center items-start gap-5 p-10 md:p-5 '>
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