import { SectionCard } from "@/components"

export default function Home() {
    const ExperienceData = [
        {
            id:'00',
            img:'/img/commitment.jpg',
            title:"Our Commitment to Compassion",
            description:"At Therapy Aid, we firmly believe that genuine service forms the very foundation of a thriving community. We're excited to introduce you to our world of compassion, where our primary goal is to provide exceptional services aimed at improving the quality of life for individuals of all ages. With unwavering dedication to nurturing physical, emotional, and mental well-being, we are the trusted hand you can always rely on."
        },
        {
            id:'01',
            img:'/img/journey.jpg',
            title:"Our Inspiring Journey",
            description:"Our remarkable journey began with a simple yet profound vision: to create a nurturing environment that promotes independence, dignity, and happiness for those we serve. With the collective dedication of our skilled staff and hearts brimming with empathy, we've turned that vision into a vibrant reality."
        },
        {
            id:'02',
            img:'/img/service1.png',
            title:"Personalized Care for Unique Individuals",
            description:"At Therapy Aid, we celebrate the uniqueness of every person. We understand that each individual has distinct needs, preferences, and circumstances. That's why we offer a comprehensive range of personalized services meticulously tailored to meet the specific requirements of each person. Whether it's providing care for seniors or assisting those with disabilities, we're here to lighten the load and bring brightness into lives."
        },
        {
            id:'03',
            img:'/img/physiotherapy.jpg',
            title:"Our Family of Caregivers",
            description:"More than just a team, we are a family of caregivers, companions, and friends. We're united by our mission to enhance your life, one day at a time. Safety, reliability, and a genuine connection with those we serve are our core values, and we take pride in being your trusted partner in Allied Health Assistance services."
        },
        {
            id:'04',
            img:'/img/welcome.jpg',
            title:"A Warm Welcome to Our Family",
            description:"Thank you for considering Therapy Aid as your preferred therapy assistance and care provider. We eagerly anticipate the opportunity to build lasting relationships, make a positive impact, and serve as a beacon of therapy, care, and compassion in your life. Welcome to our extended family; together, we'll create a better tomorrow filled with warmth, kindness, and the utmost care."
        },
    ]
    return (
        <div className="flex flex-col items-center justify-center mb-20">
            <div className="w-full md:w-[80%] scroll-smooth transition-all ease-in">
                {
                    ExperienceData.map((i,index) => 
                    <SectionCard key={i.id} index={index} title={i.title} description={i.description} img={i.img} btn={false}/>
                    )
                }
            </div>
        </div>
    )}