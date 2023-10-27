import Priya from "../../Images/Priya.svg"
import RightArrow from "../../Images/RightArrow.svg"
const Experience = () => {
  return (
    <div className="w-[41vw] h-[50vh] bg-[#7B36FF] rounded-[45px] p-12 flex flex-col ml-20 mt-4">
        <h1 className="text-base text-white font-Halenior-medium mb-2">Experience</h1>
        <h1 className="text-[30px] leading-tight font-Halenior-compact-semibold text-white">Our crew got tons of experience, so you know we'll come through with cool stuff and make sure our communication game is on point.</h1>
        <div className="flex flex-row items-center justify-between mt-10">
            <div className="flex flex-row items-center ">
            <img src={Priya} alt="co-founder" className="mr-4 w-16"/>
            <div>
            <h1 className="font-Halenior-bold text-white text-lg">Co-founder</h1>
            <h1 className="font-Halenior-medium text-white text-base">Priya Gupta</h1>
            </div>
            </div>
            <div className="flex flex-row items-center">
            <h1 className="font-Halenior-medium text-white text-base mr-4">Discuss the project</h1>
            <img src={RightArrow} alt="Discuss the project" className="w-10" />
            </div>
        </div>
    </div>
  )
}

export default Experience