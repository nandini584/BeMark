import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import {useRef} from 'react'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import data from "../../Data/Testimonials.json"
import RightArrowBlack from "../../Images/RightArrowBlack.svg"
const Testimonials = () => {
  const swiperRef = useRef(null);
  const swiperRefMob = useRef(null);

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
    if (swiperRefMob.current) {
      swiperRefMob.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
    if (swiperRefMob.current) {
      swiperRefMob.current.slidePrev();
    }
  };
  return (
    <div>
      <div className="inline-block md:hidden">
      <Swiper
          slidesPerView={1}
          spaceBetween={20} 
          modules={[Navigation, Pagination, Scrollbar]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => (swiperRefMob.current = swiper)}
          ref={swiperRefMob}
          style={{ width: '100%', maxWidth: '100vw' }} 
        >
          {data.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                rating={testimonial.rating}
                review={testimonial.review}
                reviewer={testimonial.reviewer}
                Designation={testimonial.Designation}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-row items-center justify-center">
          <img src={RightArrowBlack} alt="" className="rotate-180 mr-4 w-10 mt-12" onClick={goPrev}/>
          <img src={RightArrowBlack} alt="" className="w-10 mt-12" onClick={goNext}/>
        </div>
      </div>
      <div className="hidden md:block">

    <div className="flex flex-col items-center justify-center"> 
      <div className="m-0 w-[95vw]">
        <Swiper
          slidesPerView={3}
          spaceBetween={20} 
          modules={[Navigation, Pagination, Scrollbar]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          ref={swiperRef}
          style={{ width: '100%', maxWidth: '100vw' }} 
        >
          {data.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                rating={testimonial.rating}
                review={testimonial.review}
                reviewer={testimonial.reviewer}
                Designation={testimonial.Designation}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </div>
      <div className="flex flex-row items-center justify-center">
          <img src={RightArrowBlack} alt="" className="rotate-180 mr-4 w-10 mt-12" onClick={goPrev}/>
          <img src={RightArrowBlack} alt="" className="w-10 mt-12" onClick={goNext}/>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
