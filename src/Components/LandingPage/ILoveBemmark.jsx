import React from 'react'
import Logo from "../../Images/BDA.svg"
import Heart from "../../Images/heart.png"
const ILoveBemmark = () => {
  return (
    <div className='flex flex-row items-center px-16 bg-white rounded-3xl drop-shadow-xl hover:bg-black hover:text-white'>
        <h1 className="font-Halenior-medium text-6xl ml-5 py-8 z-50 text-[#1D0B3A] hover:text-white">I <img src={Heart} alt="" className='w-[60px] inline-block' /> Bemaark</h1>
    </div>
  )
}

export default ILoveBemmark