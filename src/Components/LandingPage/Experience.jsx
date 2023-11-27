import Priya from "../../Images/Priya.svg"
import RightArrow from "../../Images/RightArrow.svg"
const Experience = () => {
  return (
    <div className="md:w-[41vw] md:h-[54vh] h-[56vh] bg-[#1D0B3A] md:rounded-[45px] rounded-[32px] md:p-12 flex flex-col md:ml-20 mt-4 px-5 pt-8">
        <h1 className="md:text-base text-xs text-white md:font-Halenior-medium font-Halenior-regular mb-2">Experience</h1>
        <h1 className="md:text-[30px] text-xl leading-tight md:font-Halenior-compact-semibold font-Halenior-regular text-white">Our crew got tons of experience, so you know we'll come through with cool stuff and make sure our communication game is on point.</h1>
        <div className="flex flex-row items-center justify-between md:mt-16 mt-4">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-row items-center">
            <img src={Priya} alt="co-founder" className="md:mr-4 mr-2 md:w-16 w-10 inline-block"/>
            <div className="inline-block">
            <h1 className="md:font-Halenior-bold font-Halenior-regular text-white md:text-lg text-xs">Priya Gupta</h1>
            <h1 className="font-Halenior-light text-white md:text-base text-xs inline-block">Co-founder & CMO</h1>
            </div>
            </div>
            <div className="inline-block">
            <div className="flex flex-row items-center md:ml-28 md:mt-4 mt-2">
            <h1 className="md:font-Halenior-medium font-Halenior-regular text-white md:text-base text-xs md:mr-4 mr-3 ml-[110px] md:ml-0">Discuss the project</h1>
            <img src={RightArrow} alt="Discuss the project" className="md:w-10 w-8" />
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Experience