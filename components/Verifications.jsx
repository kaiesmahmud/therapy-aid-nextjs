
const Verifications = () => {
  const data = [
    {
      id:"01",
      title: "Worker Verification",
      description: "We conduct comprehensive checks, including police clearances, working with children checks, and validation of driving licenses. We also prioritize the NDIS worker Screening check to ensure the highest level of safety and trust"
    },
    {
      id:"02",
      title: "Qualifications",
      description: "We validate that our staff members possess up-to-date First Aid certificates, underscoring our commitment to providing a safe and responsive environment"
    },
    {
      id:"03",
      title: "Client Feedback Loop",
      description: "Continuous improvement is essential to us. We actively seek and consider regular feedback from our clients regarding our services. This feedback loop informs our efforts to continually enhance our service quality"
    },
    {
      id:"04",
      title: "Ongoing Staff Training",
      description: "We invest in the growth and development of our team through ongoing training initiatives. This ensures that our staff stay up-to-date with the latest industry standards and best practices, ultimately benefiting our clients"
    },
  ]
  return (
    <div className="flex flex-col md:flex-row items-center justify-center ">
        <div className="flex flex-col items-center justify-center">
            <h2 className='text-center text-xl font-semibold md:text-4xl  my-10 max-w-[90%] lg:w-full'>Rigorous Verification Process for Exceptional Team Members at Therapy Aid</h2>
            <h5 className="w-[90%] md:w-[60%] text-center text-black/70 text-xs md:text-sm lg:text-base">At Therapy Aid, we have a comprehensive verification checklist for all new staff members joining our team. This ensures that they can meet our high standards when providing services to our clients. We consistently follow the following steps when employing new staff:</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:w-[70%] p-5">
                {
                  data.map(data=> <VerificationCard key={data.id} id={data.id} title={data.title} description={data.description}/>)
                }
            </div>
        </div>
    </div>
  )
}

const VerificationCard = ({id,title,description}) => {

  return (
    <div className="m-2 p-5 bg-slate-200 rounded">
        <h1 className=" font-semibold capitalize text-sm md:text-base lg:text-md">
           <span className="text-cyan-500 text-xl md:text-2xl lg:text-3xl mr-3">{id}</span>
          {title}</h1>
        <hr className=" border-black/60 my-2" />
        <p className="text-xs md:text-sm font-light">{description}</p>
    </div>
  );
}
export default Verifications