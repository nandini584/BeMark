import React from 'react'
import Billboard from "../../Images/Porfolios/Billboard.svg"
import Packaging from "../../Images/Porfolios/Packaging.svg"
import PrintDesign from "../../Images/Porfolios/PrintDesign.svg"
import Stationery from "../../Images/Porfolios/Stationery.svg"
import WebWork from "../../Images/Porfolios/WebWork.svg"
import HorizontalScroll from 'react-scroll-horizontal'
const Portfolios = () => {
  return (
    <div className='w-[100vw] h-[100vh]'>
      <HorizontalScroll>
        <div className='w-[100vw] h-[100vh] flex flex-col item-center justify-center'>
          <img src={Billboard} alt="" />
        </div>
        <div className='w-[100vw] h-[100vh] flex flex-col item-center justify-center'>
          <img src={Packaging} alt="" />
        </div>
        <div className='w-[100vw] h-[100vh] flex flex-col item-center justify-center'>
          <img src={PrintDesign} alt=""/>
        </div>
        <div className='w-[100vw] h-[100vh] flex flex-col item-center justify-center'>
          <img src={Stationery} alt="" />
        </div>
        <div className='w-[100vw] h-[100vh] flex flex-col item-center justify-center'>
          <img src={WebWork} alt="" />
        </div>
      </HorizontalScroll>
    </div>
  )
}

export default Portfolios