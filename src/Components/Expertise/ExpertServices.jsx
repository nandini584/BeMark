import React from 'react'
import Data from "../../Data/items.json"
const ExpertServices = (props) => {
  return (
    <div className='h-[100vh] w-[100vw] flex flex-col items-center justify-center bg-black'>
        <h1 className="font-Halenior-semibold text-gray-300 opacity-60 text-lg">We're experts in</h1>
        <h1 className='text-white font-Halenior-semibold text-8xl mt-2 w-[20vw] text-center'>{Data[props.num].Service}</h1>
        <p className='font-Halenior-semibold text-gray-300 opacity-60 text-sm mt-24'>Included</p>
        <div className='flex flex-row items-center justify-start mt-5'>
            <div className='flex flex-col items-start mr-14'>
                <h1 className='text-white font-Halenior-semibold text-base'>{Data[props.num].item1}</h1>
                <h1 className='text-white font-Halenior-semibold text-base'>{Data[props.num].item2}</h1>
                <h1 className='text-white font-Halenior-semibold text-base'>{Data[props.num].item3}</h1>
                <h1 className='text-white font-Halenior-semibold text-base'>{Data[props.num].item4}</h1>
            </div>
            <div className='flex flex-col items-start'>
                <h1 className='text-white font-Halenior-semibold text-base'>{Data[props.num].item5}</h1>
                <h1 className='text-white font-Halenior-semibold text-base'>{Data[props.num].item6}</h1>
                <h1 className='text-white font-Halenior-semibold text-base'>{Data[props.num].item7}</h1>
                <h1 className='text-white font-Halenior-semibold text-base'>{Data[props.num].item8}</h1>
            </div>
        </div>
    </div>
  )
}

export default ExpertServices