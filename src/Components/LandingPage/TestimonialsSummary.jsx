const TestimonialsSummary = () => {
    return (
      <div className="bg-white flex flex-row items-center justify-between px-[40px] py-[90px]">
          <div className="flex flex-col items-start justify-between">
              <h1 className="text-[#1D0B3A] text-8xl font-Halenior-medium">Testimonials</h1>
              <div className="flex flex-row mt-28">
                  <div className="flex flex-row">
                     <h1 className="text-[#1D0B3A] text-[110px] font-Halenior-medium">22</h1>
                     <h1 className="text-[#1D0B3A] text-[20px] font-Halenior-bold mt-[105px] mr-20">verified reviews</h1>
                  </div>
                  <div className="flex flex-row">
                     <h1 className="text-[#1D0B3A] text-[110px] font-Halenior-medium">5.0</h1>
                     <h1 className="text-[#1D0B3A] text-[20px] font-Halenior-bold mt-[105px]">ratings</h1>
                  </div>
              </div>
          </div>
          <div>
              <h1 className="text-[#1D0B3A] font-Halenior-medium tracking-tight leading-tight mt-40 text-[34px] w-[35vw]">Our satisfied clients stand as living testaments to our successful collaboration and project approach.</h1>
          </div>
      </div>
    )
  }
  
  export default TestimonialsSummary