import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import {useRef, useEffect} from 'react'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import data from "../../Data/Testimonials.json"
import RightArrowBlack from "../../Images/RightArrowBlack.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Testimonials = () => {
  const swiperRef = useRef(null);
  const swiperRefMob = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity:1, 
        x:"0%"
      });
    }
  }, [controls, inView]);

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

    <motion.div
    ref={ref}
    initial={{opacity:0, x:"10%"}}
    transition={{ ease:'linear', duration: 0.8 }}
    animate={controls}
    className="flex flex-col items-center justify-center"> 
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
    </motion.div>
      <div className="flex flex-row items-center justify-center mt-12">          
          <div className="border-black border-2 rounded-full cursor-pointer z-10 relative overflow-hidden mr-4" onClick={goPrev}>
      <div className="circle" style={{ position: 'relative', width: '36px', height: '36px'}}>
        <ArrowBackIcon style={{ color: 'black' }} className="icon z-100 hover:color-white" />
        <div className="fill bg-black"></div>
      </div>
    </div>
          <div className="border-black border-2 rounded-full cursor-pointer z-10 relative overflow-hidden mr-4" onClick={goNext}>
      <div className="circle" style={{ position: 'relative', width: '36px', height: '36px'}}>
        <ArrowForwardIcon style={{ color: 'black' }} className="icon z-100 hover:color-white" />
        <div className="fill bg-black"></div>
      </div>
    </div>
          
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
