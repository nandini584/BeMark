const TestimonialsSummary = () => {
    return (
      <div className="bg-white flex md:flex-row flex-col md:items-center justify-between md:px-[48px] px-6 lg:py-[90px] py-0">
          <div className="flex flex-col md:items-start justify-between">
              <h1 className="text-[#1D0B3A] md:text-[90px] text-3xl font-Halenior-medium mt-8 md:mt-0">Testimonials</h1>
              <div className="flex flex-row md:mt-48 mt-8">
                  <div className="flex flex-row">
                     <h1 className="text-[#1D0B3A] md:text-[85px] text-4xl font-Halenior-semibold">22</h1>
                     <h1 className="text-[#1D0B3A] lg:text-base text-xs mt-6 font-Halenior-medium lg:mt-[34px] lg:mr-20">verified reviews</h1>
                  </div>
                  <div className="flex flex-row">
                     <h1 className="text-[#1D0B3A] md:text-[85px] text-4xl ml-14 md:ml-0 font-Halenior-medium">5.0</h1>
                     <h1 className="text-[#1D0B3A] lg:text-base text-xs mt-6 font-Halenior-medium lg:mt-[34px]">ratings</h1>
                  </div>
              </div>
          </div>
          <div>
              <h1 className="text-[#1D0B3A] font-Halenior-semibold lg:mt-40 mt-12 lg:text-3xl text-base lg:w-[34vw]">Our satisfied clients stand as living testaments to our successful collaboration and project approach.</h1>
          </div>
      </div>
    )
  }
  
  export default TestimonialsSummary