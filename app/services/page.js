export default function Home() {
    return (
        <div className="">
            <div className=" sticky top-24 backdrop-blur-2xl text-xs md:text-sm flex  items-center flex-wrap gap-1 md:gap-3 lg:gap-5 p-3">
                {
                    [
                        "Occupational...",
                        "Speech...",
                        "Physiotherapy..",
                        "Behavior...",  
                        "LawnMoving...",
                        "Staff ...",
                    ].map(i=> <div key={i} className="px-4 py-1 rounded-full bg-slate-300">{i}</div>)
                }
            </div>
            <div className="min-h-screen">
                dfs
            </div>
        </div>
    )}