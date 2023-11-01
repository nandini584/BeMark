import Billboard from "../../Images/Porfolios/Billboard.svg"
import Packaging from "../../Images/Porfolios/Packaging.svg"
import PrintDesign from "../../Images/Porfolios/PrintDesign.svg"
import Stationery from "../../Images/Porfolios/Stationery.svg"
import WebWork from "../../Images/Porfolios/WebWork.svg"
import RightArrowBlack from "../../Images/RightArrowBlack.svg"
import HorizontalScroll from 'react-scroll-horizontal'
const Portfolios = () => {
  return (
    <div className='w-[100vw] h-[100vh]'>
      <HorizontalScroll reverseScroll={true}>
        <div className='w-[80vw] flex flex-col item-center justify-center'>
          <img src={Billboard} alt="" />
        </div>
        <div className='w-[80vw] flex flex-col item-center justify-center'>
          <img src={Packaging} alt="" />
        </div>
        <div className='w-[80vw] flex flex-col item-center justify-center'>
          <img src={PrintDesign} alt=""/>
        </div>
        <div className='w-[80vw] flex flex-col item-center justify-center'>
          <img src={Stationery} alt="" />
        </div>
        <div className='w-[80vw] flex flex-col item-center justify-center'>
          <img src={WebWork} alt="" />
        </div>
        <div className='w-[25vw] h-[100vh] flex flex-col items-center justify-center'>
          <h1 className='text-5xl font-Halenior-medium mb-6'>Want more?</h1>
          <div className='flex flex-row items-center justify-center'>
          <h1 className='text-sm font-Halenior-medium mr-4'>View showcase</h1>
          <img src={RightArrowBlack} alt="" className='w-9'/>
          </div>
        </div>
      </HorizontalScroll>
    </div>
  )
}

export default Portfolios