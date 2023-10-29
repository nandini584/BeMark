import Amit from "../../Images/Amit.svg"
import Priya from "../../Images/Priya.svg"
import Play from "../../Images/Play.svg"
const Watchus = () => {
  return (
    <div className="flex flex-col w-[28vw]">
        {/* <h1 className="text-2xl font-bold mb-4">Welcome to <span className="text-[#7B36FF]">Bemaark</span></h1> */}
        <h1 className="text-2xl font-Halenior-medium leading-none tracking-tight mb-8">Revolutionizing creativity, design, and innovation, empowering entrepreneurs with accessible, purpose-driven solutions. Join us in this transformative creative journey.</h1>
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
            <img src={Amit} alt="amit" className="mr-4 w-[60px]"/>
            <img src={Priya} alt="priya" className="w-[60px]"/>
            </div>
            <div className="flex flex-row items-center">
                <h1 className="text-base font-Halenior-semibold mr-4">Watch us</h1>
                <img src={Play} alt="watch us" className="w-9 cursor-pointer" />
            </div>
        </div>
    </div>
  )
}

export default Watchus