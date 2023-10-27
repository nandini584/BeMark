import Experience from "./Experience"

const Expertise = () => {
  return (
    <div className="flex flex-row px-[40px]">
        <div className="flex flex-col">
        <h1 className="text-8xl font-Halenior-medium text-[#1D0B3A]">Expertise</h1>
        <div className="flex flex-row mt-24">
            <div className="flex flex-col mr-16">
                <h1 className="text-base font-Halenior-bold text-[#7B36FF]">Specialization</h1>
                <h1 className="text-2xl tracking-tight font-Halenior-compact-semibold mt-5 text-black">Brand Visualization</h1>
                <h1 className="text-2xl tracking-tight font-Halenior-compact-semibold mt-1 text-black">Marketing Materials</h1>
                <h1 className="text-2xl tracking-tight font-Halenior-compact-semibold mt-1 text-black">Corporate websites</h1>
                <h1 className="text-2xl tracking-tight font-Halenior-compact-semibold mt-1 text-black">Digital products</h1>
            </div>
            <div className="flex flex-col mr-16">
                <h1 className="text-base font-Halenior-bold text-[#7B36FF]">Industry</h1>
                <h1 className="text-2xl tracking-tight font-Halenior-compact-semibold mt-5 text-black">Automobile</h1>
                <h1 className="text-2xl tracking-tight font-Halenior-compact-semibold mt-1 text-black">Energy</h1>
                <h1 className="text-2xl tracking-tight font-Halenior-compact-semibold mt-1 text-black">Real Estate</h1>
                <h1 className="text-2xl tracking-tight font-Halenior-compact-semibold mt-1 text-black">Logistics</h1>
            </div>
            <div className="flex flex-col mt-6">
                <h1 className="text-2xl tracking-tight font-Halenior-compact-semibold mt-5 text-black">Aviation</h1>
                <h1 className="text-2xl tracking-tight font-Halenior-compact-semibold mt-1 text-black">Food & Restaurants</h1>
                <h1 className="text-2xl tracking-tight font-Halenior-compact-semibold mt-1 text-black">Information Technology</h1>
                <h1 className="text-2xl tracking-tight font-Halenior-compact-semibold mt-1 text-black">Travel</h1>
            </div>
        </div>
        </div>
        <Experience/>
    </div>
  )
}

export default Expertise