import MoreServicesCard from "./MoreServicesCard"

const MoreServices = () => {
  const MoreServicesData = [
    {
      id:'01',
      title:"Transportation and Medical Appointment Service",
      img:'/medical-transportation.jpg',
      description:"These services aim to provide safe and convenient transportation options for individuals with physical or other disabilities",
      member:'15',
    },
    {
      id:'02',
      title:"Cleaning, Shopping, and Cooking Service",
      img:'/cleaning.jpg',
      description:"We have highly efficient staff who can provide cleaning, cooking, and shopping services",
      member:'12',

    },
    {
      id:'03',
      title:"Lawn Mowing Service",
      img:'/lawn-mowing.jpg',
      description:"Our lawn mowing services feature a dedicated team of highly efficient professionals.With our expert staff, your lawn will always receive the best care it deserves",
      member:'5',

    },
  ]
  return (
    <section className="py-20">
        <h2 className='text-center text-3xl font-semibold md:text-4xl lg:text-6xl '>We Also Provides:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center pt-20 p-10 ">
          {
            MoreServicesData.map(service => (
              <MoreServicesCard key={service.id} details={service}/>
            ))
          }
        </div>
    </section>
    )
}

export default MoreServices