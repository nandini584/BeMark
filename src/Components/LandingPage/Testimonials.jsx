import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import data from "../../Data/Testimonials.json"
import RightArrowBlack from "../../Images/RightArrowBlack.svg"
const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center"> {/* Center the content */}
      <div className="m-0 w-[95vw]">
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={true}
          slidesPerView={3}
          spaceBetween={20} // Set the space between cards to 20 pixels (adjust as needed)
          modules={[Navigation, Pagination, Scrollbar]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
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
          <img src={RightArrowBlack} alt="" className="rotate-180 mr-4 w-10 mt-12" />
          <img src={RightArrowBlack} alt="" className="w-10 mt-12" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
