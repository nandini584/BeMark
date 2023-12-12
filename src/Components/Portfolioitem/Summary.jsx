import Amit from "../../Images/Amit.svg"
import Nandini from "../../Images/Nandini.jpeg"
import Priya from "../../Images/Priya.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Summary = () => {
  return (
    <div className="bg-[white] flex flex-col justify-between md:px-[40px] px-8 lg:py-[90px] py-0">
            <h1 className="text-[#1D0B3A] md:text-[88px] text-3xl font-Halenior-medium mt-8 md:mt-0">
                    Summary
            </h1>
        <div className="flex flex-row mt-28 justify-between">
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <h1 className="opacity-50 text-sm text-black md:font-Halenior-medium font-Halenior-regular mb-6">Client</h1> 
                        <h1 className="text-lg text-black md:font-Halenior-medium font-Halenior-regular">Blent</h1> 
                    </div>
                    <div className="flex flex-col ml-72">
                        <h1 className="opacity-50 text-sm text-black md:font-Halenior-medium font-Halenior-regular mb-6">Website</h1> 
                        <h1 className="text-lg text-black md:font-Halenior-medium font-Halenior-regular">www.blent.io</h1> 
                    </div>
                </div>
                <div className="flex flex-row mt-24">
                    <div className="flex flex-col">
                        <h1 className="opacity-50 text-sm text-black md:font-Halenior-medium font-Halenior-regular mb-6">Industry recognition</h1> 
                        <h1 className="text-lg text-black md:font-Halenior-medium font-Halenior-regular">Behance Stock Gallary</h1> 
                    </div>
                    <div className="flex flex-col ml-[220px]">
                        <h1 className="opacity-50 text-sm text-black md:font-Halenior-medium font-Halenior-regular mb-6">Credits</h1> 
                        <h1 className="text-lg text-black md:font-Halenior-medium font-Halenior-regular mb-2">Vlad Migulia</h1> 
                        <h1 className="text-lg text-black md:font-Halenior-medium font-Halenior-regular mb-2">Vlad Migulia</h1> 
                        <h1 className="text-lg text-black md:font-Halenior-medium font-Halenior-regular mb-2">Vlad Migulia</h1> 
                        <h1 className="text-lg text-black md:font-Halenior-medium font-Halenior-regular mb-2">Vlad Migulia</h1> 
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-[43vw]">
            <h1 className="opacity-50 text-sm text-black md:font-Halenior-medium font-Halenior-regular mb-6">quote</h1> 
                <h1 className="font-Halenior-semibold text-4xl">Our aim was to provide a comprehensive view of how the new branding will blend in with the existing Blent platform.</h1>
                <div className="flex flex-row items-center justify-between mt-14">
                    <div className="flex flex-row items-center">
                        <img src={Amit} alt="Co-founder" className="mr-4 md:w-[60px] w-[40px]"/>
                        <div className="">
                            <h1 className="md:font-Halenior-bold font-Halenior-regular md:text-lg text-xs">Amit Rajput</h1>
                            <h1 className="font-Halenior-medium opacity-60 md:text-sm text-xs">Founder and Head of Design</h1>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                    <h1 className="md:font-Halenior-medium font-Halenior-regular text-black md:text-base text-xs mr-4">Discuss the project</h1>
                    <div className="border-black border-2 rounded-full cursor-pointer z-10 relative overflow-hidden mr-4" >
                    <div className="circle" style={{ position: 'relative', width: '36px', height: '36px'}}>
                    <ArrowForwardIcon style={{ color: 'black' }} className="icon z-100 hover:color-white" />
                    <div className="fill bg-black"></div>
                    </div></div>
            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Summary