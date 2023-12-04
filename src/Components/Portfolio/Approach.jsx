import Experience from "./Experience"

const Expertise = () => {
  return (
    <div className="flex md:flex-row md:pt-28 flex-col md:justify-between md:px-[40px] px-4 bg-white">
        <div className="flex flex-col mb-8 md:mb-0">
        <h1 className="md:text-8xl text-4xl md:font-Halenior-medium font-Halenior-semibold text-[#1D0B3A]">Approach</h1>
        <div className="flex md:flex-row flex-col md:mt-40 mt-8 md:w-[40vw]">
            <h1 className="md:text-2xl text-base tracking-tight font-Halenior-compact-semibold md:mt-5 mt-2 text-black">This synergy allows us to craft not just designs, but remarkable experiences that transcend boundaries in every project. Together, we're not just creating; we're shaping new horizons, one masterpiece at a time.</h1>        
        </div>
        </div>
        <Experience/>
    </div>
  )
}

export default Expertise