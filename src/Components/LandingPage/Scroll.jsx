import React,{useEffect} from 'react'
import gsap from 'gsap'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Scroll = () => {
    useEffect(() => {
        let currentScroll = window.scrollY;
        let isScrollingDown = true;
        let arrows = document.querySelectorAll(".arrow");
        let tween = gsap.to(".marquee__inner", {
            xPercent: -50,
            repeat: -1,
            duration: 10,
            ease: "linear",
        });
    
        window.addEventListener("scroll", function () {
            const scrollY = window.scrollY;
    
            if (scrollY > currentScroll) {
                isScrollingDown = true;
            } else {
                isScrollingDown = false;
            }
    
            const progress = (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 10;
    
            if (isScrollingDown) {
                tween.progress(progress);
            } else {
                tween.progress(1 - progress);
            }
    
            arrows.forEach((arrow) => {
                if (isScrollingDown) {
                    arrow.classList.remove("active");
                } else {
                    arrow.classList.add("active");
                }
            });
            tween.reverse(isScrollingDown);
            currentScroll = scrollY;
        });
    }, []);
    
  return (
    <div className="">
    <div className='marquee relative bg-[#1D0B3A] text-white py-7 px-0 font-Halenior-semibold text-8xl overflow-hidden'>
        <div className="marquee__inner flex w-fit flex-1 flex-row">
            <div className="marquee__part">
                A Remarkable Presence
                <div>
                    <ArrowDownwardIcon style={{fontSize:"80px"}}  className='arrow'/>
                </div>
            </div>
            <div className="marquee__part">
                A Remarkable Presence
                <div >
                <ArrowDownwardIcon style={{fontSize:"80px"}}  className='arrow'/>
                </div>
            </div>
            <div className="marquee__part">
                A Remarkable Presence
                <div >
                <ArrowDownwardIcon  style={{fontSize:"80px"}} className='arrow'/>
                </div>
            </div>
            <div className="marquee__part">
                A Remarkable Presence
                <div >
                <ArrowDownwardIcon  style={{fontSize:"80px"}} className='arrow'/>
                </div>
            </div>
            <div className="marquee__part">
                A Remarkable Presence
                <div >
                <ArrowDownwardIcon  style={{fontSize:"80px"}} className='arrow'/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Scroll