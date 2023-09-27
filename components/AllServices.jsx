import { SectionCard } from "."

const AllServices = () => {
    const data = [
        {
            id:'01',
            img:'/occupational-therapy.jpg',
            title:"Occupational Therapy Excellence",
            description:"This section serves as a testament to your commitment to enhancing the lives of individuals facing physical, sensory, or cognitive challenges. Explore the purpose and services offered, demonstrating how your team collaborates closely with clients to improve various aspects of their daily lives."

        },
        {
            id:'02',
            img:'/speech-therapy.jpg',
            title:"Empowering Communication",
            description:"In this section, dive into the realm of speech therapy and its transformative impact. Highlight your dedication to helping individuals overcome communication and swallowing disorders, emphasizing the tailored approach you employ for each client."

        },
        {
            id:'03',
            img:'/physiotherapy.jpg',

            title:"Revitalizing Physical Well-being",
            description:"Explore the world of physiotherapy, showcasing your role in helping individuals restore and maintain physical function and mobility. Share insights into your comprehensive support, including milestones achieved and improvements made in muscle strength, joint alignment, and movement patterns."

        },
        {
            id:'04',
            img:'/behavior-therapy.jpg',

            title:"Nurturing Positive Behavior",
            description:"Delve into your expertise in behavior therapy, highlighting how your team collaborates with parents and therapists to address behavioral concerns. Showcase your evidence-based strategies and your dedication to fostering positive behavior patterns and overall well-being."

        },
        {
            id:'05',
            img:'/medical-transportation.jpg',

            title:"Reliable Transportation for Medical Needs",
            description:"Our Transportation and Medical Appointment Service is designed to provide dependable transportation solutions to individuals with healthcare appointments. We understand the importance of timely and stress-free travel, ensuring you never miss a medical appointment. Our dedicated team ensures your safety and comfort throughout the journey, allowing you to focus on your health and well-being."

        },
        {
            id:'06',
            img:'/cleaning.jpg',
            title:"Comprehensive Home Assistance",
            description:"Discover our Comprehensive Home Assistance services, encompassing Cleaning, Shopping, and Cooking. We take pride in ensuring your home is a haven of comfort and cleanliness. Our team is here to handle the household chores, grocery shopping, and meal preparation, allowing you to enjoy more free time and a well-maintained living space."

        },
        {
            id:'07',
            img:'/lawn-mowing.jpg',

            title:"Lawn Care Excellence",
            description:"Experience the difference with our Lawn Mowing Service. Our dedicated team is passionate about maintaining your outdoor spaces with precision and care. From grass cutting to edging, we ensure your lawn looks immaculate year-round. Enjoy a lush, well-manicured lawn without the hassle of DIY maintenance."

        },
    ]
  return (
    <div className="flex flex-col items-center justify-center mb-20">
        <div className="w-full md:w-[80%] scroll-smooth transition-all ease-in">
            {
                data.map((i,index) => 
                <SectionCard key={i.id} index={index} title={i.title} description={i.description} img={i.img} btn={true}/>
                )
            }
        </div>
    </div>
  )
}

export default AllServices