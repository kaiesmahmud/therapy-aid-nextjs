import Link from "next/link"

const ServiceCrumbs = () => {
  const data = [
    {
      id:'00',
      title:"Home",
      link: '/',

    },
    {
      id:'01',
      title:"Occupational..",
      link: '/services',
    },
    {
      id:'02',
      title:"Speech..",
      link: '/services/#1',
    },
    {
      id:'03',
      title:"Physiotherapy..",
      link: '/services/#2',
    },
    {
      id:'04',
      title:"Behavior..",  
      link: '/services/#3',
    },
    {
      id:'05',
      title:"LawnMowing..",
      link: '/services/#4',
    },
    {
      id:'06',
      title:"Cleaning..",
      link: '/services/#5',
    },
    {
      id:'07',
      title:"Transport..",
      link: '/services/#6',
    },
  ]
    
  return (
    <div className=" sticky top-24 backdrop-blur-lg text-xs md:text-sm flex  items-center flex-wrap gap-1 md:gap-2  p-3">
        {
            data.map(i=> <Link key={i.id} href={i.link}><div className="px-4 py-1 rounded-full bg-slate-300 hover:bg-slate-800 hover:text-white transition-all ease-in">{i.title}</div></Link>)
        }
    </div>
  )
}

export default ServiceCrumbs