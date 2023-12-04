import Amit from "../../Images/Amit.svg"
import RightArrow from "../../Images/RightArrow.svg"
const Experience = () => {
  return (
    <div className="md:w-[44vw] md:h-[54vh] h-[56vh] bg-[#1D0B3A] md:rounded-[45px] rounded-[32px] md:p-12 flex flex-col md:ml-20 mt-4 px-5 py-8">
        <h1 className="md:text-sm opacity-60 text-xs text-white md:font-Halenior-medium font-Halenior-regular mb-2">Quote</h1>
        <h1 className="md:text-[30px] text-xl leading-tight md:font-Halenior-compact-semibold font-Halenior-regular text-white">We don't just dip our toes; we take a deep dive into the business context. The result? Designs that not only catch the eye but also align strategically with your business goals.</h1>
            <div className="md:flex flex-col md:flex-row md:justify-between md:items-center md:mt-8 mt-4">
            <div className="flex flex-row items-center">
            <img src={Amit} alt="co-founder" className="md:mr-4 mr-2 md:w-16 w-10 inline-block"/>
            <div className="">
            <h1 className="md:font-Halenior-bold font-Halenior-regular text-white md:text-lg text-xs">Amit Rajput</h1>
            <h1 className="font-Halenior-medium opacity-60 text-white md:text-sm text-xs">Founder and Head of Design</h1>
            </div>
            </div>
            <div className="flex flex-row items-center md:mt-4 mt-2">
            <h1 className="md:font-Halenior-medium font-Halenior-regular text-white md:text-base text-xs md:mr-4 mr-3 ml-[90px] md:ml-0">Discuss the project</h1>
            <img src={RightArrow} alt="Discuss the project" className="md:w-10 w-8" />
            </div>
          </div>
    </div>
  )
}

export default Experience