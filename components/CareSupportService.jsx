import CareSupportCard from "./CareSupportCard"

const CareSupportService = () => {
    const careSupportsdata = [
        {
            id:'01',
            icon: "GiHealthNormal",
            title: "Personal Care",
            description: "Care and support workers help with personal care tasks such as bathing, dressing, grooming, and toileting for individuals who may have difficulty doing these activities independently",
        },
        {
            id:'02',
            icon: "GiPill",
            title: "Medication Management",
            description: "They may assist with medication reminders and help clients take their prescribed medications on time",
        },
        {
            id:'03',
            icon: "MdOutlineAssistWalker",
            title: "Mobility Support",
            description: "For individuals with mobility issues, care workers can provide assistance with walking, using mobility aids, or transferring from one place to another",
        },
        {
            id:'04',
            icon: "GiFruitBowl",
            title: "Meal Preparation and Nutrition",
            description: "Care and support workers can help plan and prepare nutritious meals, taking into account any dietary restrictions or preferences of the client",
        },
        {
            id:'05',
            icon: "BsHearts",
            title: "Emotional Support",
            description: "They offer emotional support and companionship to clients, which can be particularly important for individuals who may feel isolated or lonely",
        },
    ]
  return (
    <div>
        <h2 className='text-center text-2xl font-semibold md:text-3xl lg:text-5xl my-10'>Comprehensive Care and Support Services <br />for Individuals in Need</h2>
        <div className="grid grid-cols-2 p-10  justify-center content-center md:grid-cols-5 gap-10">
            {
                careSupportsdata.map(data => (
                    <CareSupportCard key={data.id} data={data} />
                ))
            }
        </div>
    </div>
  )
}

export default CareSupportService