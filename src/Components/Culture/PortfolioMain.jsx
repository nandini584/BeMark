import Portfolio from "./Portfolio"

const PortfolioMain = () => {
  return (
    <div className="flex md:flex-row md:pt-28 flex-col md:justify-between md:px-[40px] px-4 bg-white">
        <div className="flex flex-col mb-8 md:mb-0">
        <h1 className="md:text-8xl text-4xl md:font-Halenior-medium font-Halenior-semibold text-[#1D0B3A]">Portfolio</h1>
        <div className="flex md:flex-row flex-col md:mt-40 mt-8 md:w-[40vw]">
            <h1 className="md:text-2xl text-base tracking-tight font-Halenior-compact-semibold md:mt-5 mt-2 text-black">A testament to our passion for conquering challenges and crafting impactful outcomes through collaborative creativity.</h1>        
        </div>
        </div>
        <Portfolio/>
    </div>
  )
}

export default PortfolioMain