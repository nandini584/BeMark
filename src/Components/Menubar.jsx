import TiltArrow from "../Images/TiitArrow.svg"
import Cross from "../Images/CrossCirc.svg"
const Menubar = () => {
  return (
    <div className='w-[32vw] h-[85vh] px-6 py-4 bg-white rounded-3xl'>
        <div className='flex flex-row items-center justify-end'>
            <h1 className="font-Halenior-medium text-sm">Close</h1>
            <img src={Cross} alt="" className="w-9 ml-2 opacity-70"/>
        </div>
        <div className='flex flex-col mt-14 ml-4'>
            <h1 className="font-Halenior-medium text-4xl tracking-wide mb-3">Home</h1>
            <h1 className="font-Halenior-medium text-4xl tracking-wide mb-3">Portfolio</h1>
            <h1 className="font-Halenior-medium text-4xl tracking-wide mb-3">Expertise</h1>
            <h1 className="font-Halenior-medium text-4xl tracking-wide mb-3">About</h1>
            <h1 className="font-Halenior-medium text-4xl tracking-wide mb-3">Feed</h1>
            <h1 className="font-Halenior-medium text-4xl tracking-wide mb-3">Contact</h1>
        </div>
        <div className='flex flex-row items-end justify-between'>
            <div className='flex flex-row items-center'>
            <h1 className="text-sm font-Halenior-semibold mx-4">hello@bemaark.com</h1>
            <img src={TiltArrow} alt="" />
            </div>
            <div className='flex flex-col'>
            <div className="md:flex md:flex-row items-center mb-1">
            <h1 className="md:text-sm text-xs font-Halenior-medium md:font-Halenior-semibold text-black md:w-20 w-12 inline-block"><a href="https://www.instagram.com/bemaarkdigital/" className="no-underline">Instagram</a></h1>
            <img src={TiltArrow} alt="connect" className="inline-block w-3 md:w-auto"/>
            </div>
            <div className="md:flex md:flex-row items-center mb-1">
            <h1 className="md:text-sm text-xs font-Halenior-medium md:font-Halenior-semibold text-black md:w-20 w-12 inline-block"><a href="https://www.facebook.com/bemaark" className="no-underline">Facebook</a></h1>
            <img src={TiltArrow} alt="connect" className="inline-block w-3 md:w-auto"/>
            </div>
            <div className="md:flex md:flex-row items-center mb-1">
            <h1 className="md:text-sm text-xs font-Halenior-medium md:font-Halenior-semibold text-black md:w-20 w-12 inline-block"><a href="https://www.linkedin.com/showcase/bemaark/?viewAsMember=true" className="no-underline">Linkedin</a></h1>
            <img src={TiltArrow} alt="connect" className="inline-block w-3 md:w-auto"/>
            </div>
            <div className="md:flex md:flex-row items-center mb-1">
            <h1 className="md:text-sm text-xs font-Halenior-medium md:font-Halenior-semibold text-black md:w-20 w-12 inline-block"><a href="https://www.youtube.com/channel/UCBuaowRx3OgSpQubkuD4rZQ" className="no-underline">YouTube</a></h1>
            <img src={TiltArrow} alt="connect" className="inline-block w-3 md:w-auto"/>
            </div>
            <div className="md:flex md:flex-row items-center mb-1">
            <h1 className="md:text-sm text-xs font-Halenior-medium md:font-Halenior-semibold text-black md:w-20 w-12 inline-block"><a href="">Dribbble</a></h1>
            <img src={TiltArrow} alt="connect" className="inline-block w-3 md:w-auto"/>
            </div>
            <div className="md:flex md:flex-row items-center mb-1">
            <h1 className="md:text-sm text-xs font-Halenior-medium md:font-Halenior-semibold text-black md:w-20 w-12 inline-block"><a href="">Pinterest</a></h1>
            <img src={TiltArrow} alt="connect" className="inline-block w-3 md:w-auto"/>
            </div>
            <div className="md:flex md:flex-row items-center mb-1">
            <h1 className="md:text-sm text-xs font-Halenior-medium md:font-Halenior-semibold text-black md:w-20 w-12 inline-block"><a href="https://www.behance.net/bemaark" className="no-underline">Behance</a></h1>
            <img src={TiltArrow} alt="connect" className="inline-block w-3 md:w-auto"/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Menubar