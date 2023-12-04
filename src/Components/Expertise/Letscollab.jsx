import React from 'react'
import Arrow from "../../Images/RightArrowno.svg"
const Letscollab = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className="font-Halenior-compact-semibold tracking-tighter text-[90px]">Let's collab!</h1>
        <h2 className="font-Halenior-semibold text-base md:w-[24vw] w-full text-center">Share your details, and let's explore how we can elevate your digital journey together.</h2>
        <form action="" className='flex-col flex items-center'>
            <input type="text" placeholder="Your name" required className="bg-transparent font-Halenior-semibold placeholder:text-gray-500 text-gray-950 text-sm border-b-2 py-2 w-[22vw] mt-14 mb-3 hover:placeholder:text-gray-800 hover:border-gray-500 outline-none"/>
            <input type="text" placeholder="Your business email" required className="bg-transparent font-Halenior-semibold text-sm border-b-2 py-2 placeholder:text-gray-500 text-gray-950 w-[22vw] hover:placeholder:text-gray-800 hover:border-gray-500 mb-3 outline-none"/>
            <input type="text" placeholder="Your company name" required className="bg-transparent font-Halenior-semibold text-sm border-b-2 py-2 w-[22vw] placeholder:text-gray-500 text-gray-950 hover:placeholder:text-gray-800 hover:border-gray-500 outline-none"/>
            <button className='border-2 px-5 bg-black text-white font-Halenior-semibold text-base rounded-full py-2 flex flex-row items-center mt-6'>Send <img src={Arrow} alt="" className='text-white w-3 ml-3' /></button>
        </form>
    </div>
  )
}

export default Letscollab