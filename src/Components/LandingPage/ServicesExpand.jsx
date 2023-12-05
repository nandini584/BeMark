import Stock1 from "../../Images/Stock1.svg"
import Branding from "../../Video/Branding.mp4"
import Social from "../../Video/Socialmedia.mp4"
import Production from "../../Video/Production.mp4"
import Webdev from "../../Video/Webdevelopment.mp4"
import Userresearch from "../../Video/Userresearch.mp4"
import UI from "../../Video/UI_UX .mp4"
const ServicesExpand = () => {
  return (
    <div className="flex md:flex-row flex-col bg-white md:px-[50px] px-4 md:my-[10vh]">
        <h1 className="md:text-8xl text-4xl md:font-Halenior-medium font-Halenior-semibold text-[#1D0B3A]">Services</h1>
        <div className="flex md:flex-row flex-col md:ml-44 md:mt-0 mt-6">
            <div className="flex flex-col md:w-[25vw] md:mr-28">
                <div>
                <h1 className="font-Halenior-semibold md:text-2xl text-lg text-black">Brand Identity</h1>
                <h1 className="md:font-Halenior-medium font-Halenior-regular md:text-base text-xs leading-tight mt-4">Crafting a distinct visual language that resonates with your brand's essence, our designs evoke emotion and make your identity unforgettable.</h1>
                <div className="flex flex-row items-center mt-5 mb-10">
                <video src={Branding} alt="Brand Identity" autoPlay loop muted className="w-40 mr-5 rounded-full"/>
                <video src={Branding} alt="Brand Identity" autoPlay loop muted className="w-40 mr-5 rounded-full"/>
                </div>
                </div>
            <div className="">
                <h1 className="font-Halenior-semibold md:text-2xl text-lg text-black">Digital Marketing</h1>
                <h1 className="md:font-Halenior-medium font-Halenior-regular md:text-base text-xs leading-tight mt-4">Maximize online presence with tailored strategies. Our expert team drives results, Boost engagement, conversions, and ROI.</h1>
                <div className="flex flex-row items-center mt-5 mb-10">
                <video src={Social} alt="Brand Identity" autoPlay loop muted className="w-40 mr-5 rounded-full"/>
                <video src={Social} alt="Brand Identity" autoPlay loop muted className="w-40 mr-5 rounded-full"/>
                </div>
            </div>
                <div>
                <h1 className="font-Halenior-semibold md:text-2xl text-lg text-black">Product Photo & Video Shoot</h1>
                <h1 className="md:font-Halenior-medium font-Halenior-regular md:text-base text-xs leading-tight mt-4 ">Elevate your product with a stunning photo and video shoot. Our expert team captures your item in high-resolution, creating visually compelling content that boosts sales and brand presence.</h1>
                <div className="flex flex-row items-center mt-5 mb-10">
                <video src={Production} alt="Brand Identity" autoPlay loop muted className="w-40 mr-5 rounded-full"/>
                <video src={Production} alt="Brand Identity" autoPlay loop muted className="w-40 mr-5 rounded-full"/>
                </div>
                </div>
            </div>
            <div className="flex flex-col md:w-[25vw]">
                <div>
                <h1 className="font-Halenior-semibold md:text-2xl text-lgl text-black">Web Development</h1>
                <h1 className="md:font-Halenior-medium font-Halenior-regular md:text-base text-xs leading-tight mt-4">Crafting dynamic, user-centric websites. We blend design and code to bring your online vision to life. Your web journey begins here.</h1>
                <div className="flex flex-row items-center mt-5 mb-10">
                <video src={Webdev} alt="Brand Identity" autoPlay loop muted className="w-40 mr-5 rounded-full"/>
                <video src={Webdev} alt="Brand Identity" autoPlay loop muted className="w-40 mr-5 rounded-full"/>
                </div>
                </div>
            <div className="">
                <h1 className="font-Halenior-semibold md:text-2xl text-lg text-black">User Research</h1>
                <h1 className="md:font-Halenior-medium font-Halenior-regular md:text-base text-xs leading-tight mt-4">Understand users' needs, behaviors, and motivations to craft effective solutions that resonate. Research drives meaningful innovation and user-centric design.</h1>
                <div className="flex flex-row items-center mt-5 mb-10">
                <video src={Userresearch} alt="Brand Identity" autoPlay loop muted className="w-40 mr-5 rounded-full"/>
                <video src={Userresearch} alt="Brand Identity" autoPlay loop muted className="w-40 mr-5 rounded-full"/>
                </div>
            </div>
                <div>
                <h1 className="font-Halenior-semibold md:text-2xl text-lg text-black">UI/UX Design</h1>
                <h1 className="md:font-Halenior-medium font-Halenior-regular md:text-base text-xs leading-tight mt-4">Intuitive and engaging UI that enhances user experience through simplicity, consistency, and aesthetic appeal, fostering seamless interaction and navigation.</h1>
                <div className="flex flex-row items-center mt-5 mb-10">
                <video src={UI} alt="Brand Identity" autoPlay loop muted className="w-40 mr-5 rounded-full"/>
                <video src={UI} alt="Brand Identity" autoPlay loop muted className="w-40 mr-5 rounded-full"/>
                
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesExpand