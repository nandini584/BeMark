const Portfolio = () => {
    return (
      <div className="bg-white flex md:flex-row flex-col md:items-center justify-between md:px-[40px] px-6 lg:py-[90px] py-0">
          <div className="flex flex-col md:items-start justify-between">
              <h1 className="text-[#1D0B3A] md:text-8xl text-3xl font-Halenior-medium mt-8 md:mt-0">Portfolio</h1>
              <div className="flex flex-row md:mt-44 mt-8">
                  <div className="flex flex-row">
                     <h1 className="text-[#1D0B3A] md:text-[88px] text-4xl font-Halenior-semibold">42</h1>
                     <h1 className="text-[#1D0B3A] lg:text-[16px] text-xs mt-6 lg:font-Halenior-regular font-Halenior-medium lg:mt-[45px] lg:mr-12">completed projects</h1>
                  </div>
                  <div className="flex flex-row">
                     <h1 className="text-[#1D0B3A] md:text-[88px] text-4xl font-Halenior-semibold">25</h1>
                     <h1 className="text-[#1D0B3A] lg:text-[16px] text-xs mt-6 lg:font-Halenior-regular font-Halenior-medium lg:mt-[45px]">awards & features</h1>
                  </div>
              </div>
          </div>
          <div>
              <h1 className="text-[#1D0B3A] font-Halenior-medium tracking-tight leading-[1] lg:mt-48 mt-12 lg:text-[40px] text-base lg:w-[38vw]">Explore our portfolio—a testament to our commitment to holistic design, brand resonance, and everlasting impressions.</h1>
          </div>
      </div>
    )
  }
  
  export default Portfolio