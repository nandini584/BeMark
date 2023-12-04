import React from 'react'
import Logo from "../../Images/LogoPoint.svg"
const Cards = () => {
  return (
    <div className=''>
        <div className='flex flex-row items-center justify-center gap-5 mx-28 my-28 '>
               <div className='flex flex-col items-start p-14 bg-gray-100 h-[130vh] rounded-[40px]'>
                    <div className='flex flex-col'>
                    <h1 className="font-Halenior-semibold mb-5 text-5xl">Brand Evolution</h1>
                    <h1 className="font-Halenior-medium text-lg">Exploring and defining brand identities, we create visual language s that uniquely position companies in their market, setting them apart with distinct style and character.</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center h-full w-full'>
                        <img src={Logo} alt="w-28" />
                    </div>
                </div>
           <div className='flex flex-col items-center justify-center gap-5'>
                <div className='flex flex-col items-start p-14 bg-gray-100 h-[65vh] rounded-[40px]'>
                    <div className='flex flex-col'>
                    <h1 className="font-Halenior-semibold mb-5 text-5xl">Creative Conception</h1>
                    <h1 className="font-Halenior-medium text-lg">Designing intuitive interfaces and user experiences, we blend aesthetics with functionality to forge impactful digital presences that resonate with audiences.</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center h-full w-full'>
                        <img src={Logo} alt="w-28" />
                    </div>
                </div>
                <div className='flex flex-col items-start p-14 bg-gray-100 h-[65vh] rounded-[40px]'>
                    <div className='flex flex-col'>
                    <h1 className="font-Halenior-semibold mb-5 text-5xl">Digital Realization</h1>
                    <h1 className="font-Halenior-medium text-lg">Transitioning from design to development, we bring concepts to life in the digital realm, creating websites and digital product that tell compelling brand stories.</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center h-full w-full'>
                        <img src={Logo} alt="w-28" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards