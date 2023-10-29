import Logo from "../../Images/Logo.svg"
import RightArrow from "../../Images/RightArrowBlack.svg"
import TiltArrow from "../../Images/TiitArrow.svg"
const Footer = () => {
  return (
    <div className="flex flex-row px-24 py-24">
        <div className="w-[28vw]">
            <img src={Logo} alt="Bemaark" className="mb-20" />
            <h1 className="text-6xl font-Halenior-bold text-[#1D0B3A] mb-8">Let's Connect with BE</h1>
            <h1 className="text-base font-Halenior-semibold text-black mb-8">Feel free to reach out if you want to collaborate with us, or simply have a chat.</h1>
            <div className="flex flex-row items-center mb-8">
            <h1 className="text-base font-Halenior-semibold text-black  mr-4">Become a client</h1>
            <img src={RightArrow} alt="join" className="w-12" />
            </div>
            <h1 className="text-base font-Halenior-semibold text-black mb-1">Don’t like the forms? Drop us a line via email.</h1>
            <div className="flex flex-row items-center">
            <h1 className="text-base font-Halenior-semibold text-black mr-8">hello@bemaark.com</h1>
            <img src={TiltArrow} alt="connect" />
            </div>
        </div>
        <div className="w-[14vw] mt-28 mr-36 ml-48">
            <h1 className="text-base font-Halenior-semibold text-black mb-1">Our address</h1>
            <h1 className="text-base font-Halenior-semibold text-black mb-1">90, Mehrauli-Gurgaon Rd, Industrial Development Area, Sector 16, </h1>
            <br />
            <h1 className="text-base font-Halenior-semibold text-black mb-8">Gurugram, Haryana <br />122007</h1>
            <h1 className="text-base font-Halenior-semibold text-black ">Dial: +91 7003152724</h1>
        </div>
        <div className="mt-28 mr-36">
            <h1 className="text-base font-Halenior-semibold text-black mb-4 ">Follow us</h1>
            <div className="flex flex-row items-center mb-4">
            <h1 className="text-base font-Halenior-semibold text-black w-28"><a href="https://www.instagram.com/bemaarkdigital/" className="no-underline">Instagram</a></h1>
            <img src={TiltArrow} alt="connect" />
            </div>
            <div className="flex flex-row items-center mb-4">
            <h1 className="text-base font-Halenior-semibold text-black w-28"><a href="https://www.facebook.com/bemaark" className="no-underline">Facebook</a></h1>
            <img src={TiltArrow} alt="connect" />
            </div>
            <div className="flex flex-row items-center mb-4">
            <h1 className="text-base font-Halenior-semibold text-black w-28"><a href="https://www.linkedin.com/showcase/bemaark/?viewAsMember=true" className="no-underline">Linkedin</a></h1>
            <img src={TiltArrow} alt="connect" />
            </div>
            <div className="flex flex-row items-center mb-4">
            <h1 className="text-base font-Halenior-semibold text-black w-28"><a href="https://www.youtube.com/channel/UCBuaowRx3OgSpQubkuD4rZQ" className="no-underline">YouTube</a></h1>
            <img src={TiltArrow} alt="connect" />
            </div>
            <div className="flex flex-row items-center mb-4">
            <h1 className="text-base font-Halenior-semibold text-black w-28"><a href="">Dribbble</a></h1>
            <img src={TiltArrow} alt="connect" />
            </div>
            <div className="flex flex-row items-center mb-4">
            <h1 className="text-base font-Halenior-semibold text-black w-28"><a href="">Pinterest</a></h1>
            <img src={TiltArrow} alt="connect" />
            </div>
            <div className="flex flex-row items-center mb-4">
            <h1 className="text-base font-Halenior-semibold text-black w-28"><a href="https://www.behance.net/bemaark" className="no-underline">Behance</a></h1>
            <img src={TiltArrow} alt="connect" />
            </div>
        </div>
        <div className=" mt-28">
            <h1 className="text-base font-Halenior-semibold text-black mb-4">Home</h1>
            <h1 className="text-base font-Halenior-semibold text-black mb-4">Portfolio</h1>
            <h1 className="text-base font-Halenior-semibold text-black mb-4">Expertise</h1>
            <h1 className="text-base font-Halenior-semibold text-black mb-4">Culture</h1>
            <h1 className="text-base font-Halenior-semibold text-black mb-4">Feed</h1>
            <h1 className="text-base font-Halenior-semibold text-black mb-4">Contact</h1>
        </div>
    </div>
  )
}

export default Footer