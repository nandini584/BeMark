import Logo from "../../Images/Logo.svg"
import RightArrow from "../../Images/RightArrowBlack.svg"
import TiltArrow from "../../Images/TiitArrow.svg"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowOutward';
const Footer = () => {
  return (
    <div className="bg-white flex md:flex-row flex-col lg:px-24 px-6 lg:py-24 relative">
        <div className="md:w-[28vw] bg-white">
            <img src={Logo} alt="Bemaark" className="md:mb-20 mb-10 w-24 md:w-auto" />
            <h1 className="md:text-6xl text-2xl font-Halenior-bold text-[#1D0B3A] md:mb-8 mb-5">Let's Connect with BE</h1>
            <h1 className="md:text-base text-sm font-Halenior-medium md:font-Halenior-semibold text-black md:mb-8 mb-5">Feel free to reach out if you want to collaborate with us, or simply have a chat.</h1>
            <div className="flex flex-row items-center md:mb-8 mb-6">
            <h1 className="md:text-base text-sm font-Halenior-medium md:font-Halenior-semibold text-black  mr-4">Become a client</h1>
            <div className="border-black border-2 rounded-full cursor-pointer z-10 relative overflow-hidden mr-4" >
      <div className="circle" style={{ position: 'relative', width: '36px', height: '36px'}}>
        <ArrowForwardIcon style={{ color: 'black' }} className="icon z-100 hover:color-white" />
        <div className="fill bg-black"></div>
      </div>
    </div>
            </div>
            <h1 className="md:text-base text-sm font-Halenior-medium md:font-Halenior-semibold text-black mb-1">Don’t like the forms? Drop us a line via email.</h1>
            <div className="flex flex-row items-center">
            <h1 className="md:text-base text-sm font-Halenior-medium md:font-Halenior-semibold text-black md:mr-8 mr-4">hello@bemaark.com</h1>
            <div className=" hover:-rotate-[22.5] rotate-45 transition-transform duration-300 ease-in-out">
            <ArrowOutwardIcon style={{color: "black",  transition: 'color 0.3s', fontSize: "22px"}} className="hover:color-purple"/>
            </div>
            </div>
        </div>
        <div className="w-[14vw] mt-28 mr-36 ml-48 hidden md:inline-block ">
            <h1 className="text-base font-Halenior-semibold text-black mb-1">Our address</h1>
            <h1 className="text-base font-Halenior-semibold text-black mb-1">90, Mehrauli-Gurgaon Rd, Industrial Development Area, Sector 16, </h1>
            <br />
            <h1 className="text-base font-Halenior-semibold text-black mb-8">Gurugram, Haryana <br />122007</h1>
            <h1 className="text-base font-Halenior-semibold text-black ">Dial: +91 7003152724</h1>
        </div>
        <div className="flex flex-row justify-between items-start ">
        <div className="md:mt-28 mt-12 md:mr-36 mr-0 inline-block w-24 md:w-auto">
            <h1 className="text-base md:font-Halenior-semibold font-Halenior-medium text-black md:mb-4 mb-2 inline-block">Follow us</h1>
            <div className="md:flex md:flex-row items-center md:mb-2 mb-1">
            <h1 className="md:text-base text-xs font-Halenior-medium md:font-Halenior-semibold text-black md:w-28 w-16 inline-block"><a href="https://www.instagram.com/bemaarkdigital/" className="no-underline">Instagram</a></h1>
            <div className=" hover:-rotate-[22.5] rotate-45 transition-transform duration-300 ease-in-out">
            <ArrowOutwardIcon style={{color: "black",  transition: 'color 0.3s', fontSize: "22px"}} className="hover:color-purple"/>
            </div>
            </div>
            <div className="md:flex md:flex-row items-center md:mb-2 mb-1">
            <h1 className="md:text-base text-xs font-Halenior-medium md:font-Halenior-semibold text-black md:w-28 w-16 inline-block"><a href="https://www.facebook.com/bemaark" className="no-underline">Facebook</a></h1>
            <div className=" hover:-rotate-[22.5] rotate-45 transition-transform duration-300 ease-in-out">
            <ArrowOutwardIcon style={{color: "black",  transition: 'color 0.3s', fontSize: "22px"}} className="hover:color-purple"/>
            </div>
            </div>
            <div className="md:flex md:flex-row items-center md:mb-2 mb-1">
            <h1 className="md:text-base text-xs font-Halenior-medium md:font-Halenior-semibold text-black md:w-28 w-16 inline-block"><a href="https://www.linkedin.com/showcase/bemaark/?viewAsMember=true" className="no-underline">Linkedin</a></h1>
            <div className=" hover:-rotate-[22.5] rotate-45 transition-transform duration-300 ease-in-out">
            <ArrowOutwardIcon style={{color: "black",  transition: 'color 0.3s', fontSize: "22px"}} className="hover:color-purple"/>
            </div>
            </div>
            <div className="md:flex md:flex-row items-center md:mb-2 mb-1">
            <h1 className="md:text-base text-xs font-Halenior-medium md:font-Halenior-semibold text-black md:w-28 w-16 inline-block"><a href="https://www.youtube.com/channel/UCBuaowRx3OgSpQubkuD4rZQ" className="no-underline">YouTube</a></h1>
            <div className=" hover:-rotate-[22.5] rotate-45 transition-transform duration-300 ease-in-out">
            <ArrowOutwardIcon style={{color: "black",  transition: 'color 0.3s', fontSize: "22px"}} className="hover:color-purple"/>
            </div>
            </div>
            <div className="md:flex md:flex-row items-center md:mb-2 mb-1">
            <h1 className="md:text-base text-xs font-Halenior-medium md:font-Halenior-semibold text-black md:w-28 w-16 inline-block"><a href="">Dribbble</a></h1>
            <div className=" hover:-rotate-[22.5] rotate-45 transition-transform duration-300 ease-in-out">
            <ArrowOutwardIcon style={{color: "black",  transition: 'color 0.3s', fontSize: "22px"}} className="hover:color-purple"/>
            </div>
            </div>
            <div className="md:flex md:flex-row items-center md:mb-2 mb-1">
            <h1 className="md:text-base text-xs font-Halenior-medium md:font-Halenior-semibold text-black md:w-28 w-16 inline-block"><a href="">Pinterest</a></h1>
            <div className=" hover:-rotate-[22.5] rotate-45 transition-transform duration-300 ease-in-out">
            <ArrowOutwardIcon style={{color: "black",  transition: 'color 0.3s', fontSize: "22px"}} className="hover:color-purple"/>
            </div>
            </div>
            <div className="md:flex md:flex-row items-center md:mb-2 mb-1">
            <h1 className="md:text-base text-xs font-Halenior-medium md:font-Halenior-semibold text-black md:w-28 w-16 inline-block"><a href="https://www.behance.net/bemaark" className="no-underline">Behance</a></h1>
            <div className=" hover:-rotate-[22.5] rotate-45 transition-transform duration-300 ease-in-out">
            <ArrowOutwardIcon style={{color: "black",  transition: 'color 0.3s', fontSize: "22px"}} className="hover:color-purple"/>
            </div>
            </div>
        </div>
        <div className="md:mt-28 mt-14 inline-block md:w-0">
            <h1 className="md:text-base text-sm font-Halenior-medium md:font-Halenior-semibold text-black md:mb-4 mb-2">Home</h1>
            <h1 className="md:text-base text-sm font-Halenior-medium md:font-Halenior-semibold text-black md:mb-4 mb-2">Portfolio</h1>
            <h1 className="md:text-base text-sm font-Halenior-medium md:font-Halenior-semibold text-black md:mb-4 mb-2">Expertise</h1>
            <h1 className="md:text-base text-sm font-Halenior-medium md:font-Halenior-semibold text-black md:mb-4 mb-2">Culture</h1>
            <h1 className="md:text-base text-sm font-Halenior-medium md:font-Halenior-semibold text-black md:mb-4 mb-2">Feed</h1>
            <h1 className="md:text-base text-sm font-Halenior-medium md:font-Halenior-semibold text-black md:mb-4 mb-2">Contact</h1>
        </div>
        </div>
        
        <div className="md:mt-14 mt-10 md:hidden inline-block ">
            <h1 className="md:text-base text-sm font-Halenior-medium md:font-Halenior-semibold text-black mb-2">Our address</h1>
            <h1 className="md:text-base text-xs font-Halenior-medium md:font-Halenior-semibold text-black mb-1">90, Mehrauli-Gurgaon Rd, <br /> Industrial Development Area,<br /> Sector 16, </h1>
            <br />
            <h1 className="md:text-base text-xs font-Halenior-medium md:font-Halenior-semibold text-black md:mb-6 mb-0">Gurugram, Haryana <br />122007</h1>
            <h1 className="md:text-base text-xs font-Halenior-medium md:font-Halenior-semibold text-black md:mb-0 mb-10">Dial: +91 7003152724</h1>
        </div>
    </div>
  )
}

export default Footer