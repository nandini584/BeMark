import Experience from "./Experience"

const Expertise = () => {
  return (
    <div className="flex md:flex-row flex-col md:px-[40px] px-4 bg-white">
        <div className="flex flex-col mb-8 md:mb-0">
        <h1 className="md:text-8xl text-4xl md:font-Halenior-medium font-Halenior-semibold text-[#1D0B3A]">Expertise</h1>
        <div className="flex md:flex-row flex-col md:mt-24 mt-8">
            <div className="flex flex-col mr-16 md:mb-0 mb-12">
                <h1 className="md:text-base text-sm md:font-Halenior-bold font-Halenior-medium text-[#7B36FF] opacity-60">Specialization</h1>
                <h1 className="md:text-2xl text-base tracking-tight font-Halenior-compact-semibold md:mt-5 mt-2 text-black">Brand Visualization</h1>
                <h1 className="md:text-2xl text-base tracking-tight font-Halenior-compact-semibold mt-1 text-black">Digital Marketing</h1>
                <h1 className="md:text-2xl text-base tracking-tight font-Halenior-compact-semibold mt-1 text-black">UI/UX Design</h1>
                <h1 className="md:text-2xl text-base tracking-tight font-Halenior-compact-semibold mt-1 text-black">Web Development</h1>

            </div>
            <div className="flex flex-row ">

            <div className="flex flex-col mr-16">
                <h1 className="md:text-base text-sm md:font-Halenior-bold font-Halenior-medium text-[#7B36FF] opacity-60">Industry</h1>
                <h1 className="md:text-2xl text-base tracking-tight font-Halenior-compact-semibold md:mt-5 mt-2 text-black">Automobile</h1>
                <h1 className="md:text-2xl text-base tracking-tight font-Halenior-compact-semibold mt-1 text-black">Energy</h1>
                <h1 className="md:text-2xl text-base tracking-tight font-Halenior-compact-semibold mt-1 text-black">Real Estate</h1>
                <h1 className="md:text-2xl text-base tracking-tight font-Halenior-compact-semibold mt-1 text-black">FinTech</h1>
                <h1 className="md:text-2xl text-base tracking-tight font-Halenior-compact-semibold mt-1 text-black">EdTech</h1>
            </div>
            <div className="flex flex-col mt-6">
                <h1 className="md:text-2xl text-base tracking-tight font-Halenior-compact-semibold md:mt-5 mt-0 text-black">Aviation</h1>
                <h1 className="md:text-2xl text-base tracking-tight font-Halenior-compact-semibold mt-1 text-black">Healthcare</h1>
                <h1 className="md:text-2xl text-base tracking-tight font-Halenior-compact-semibold mt-1 text-black">Information Technology</h1>
                <h1 className="md:text-2xl text-base tracking-tight font-Halenior-compact-semibold mt-1 text-black">Lifestyle</h1>
                <h1 className="md:text-2xl text-base tracking-tight font-Halenior-compact-semibold mt-1 text-black">Food & Travel</h1>
            </div>
            </div>
        </div>
        </div>
        <Experience/>
    </div>
  )
}

export default Expertise