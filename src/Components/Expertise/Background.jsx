import gsap from 'gsap';
import {useEffect} from "react";
import ScrollTrigger from 'gsap';
import Bg from "../../Images/bgbemaark.svg"
import Letscollab from './Letscollab';
gsap.registerPlugin(ScrollTrigger)
const Background = () => {
    useEffect(()=>{
        gsap.to(".box",{
            scrollTrigger:{
                trigger:".box-trigger",
                start:"top center",
                end:"bottom center",
                scrub:0.5,
                duration:0.7,
                ease:"expo.in"
            },
            borderRadius:"0px",
            width: "100vw",
            margin:"0",
            filter: "blur(12px)"
        }),
        gsap.to('.text-container', {
            scrollTrigger: {
              trigger: '.box-trigger',
              start: 'top bottom', // Adjust as needed
              end: 'bottom center',
              scrub: 0.5,
              ease: 'expo.in',
            },
            opacity: 1,
            y: "-105vh",
          })
    },[])

   

  return (
    <div>
    <div className='box-trigger mt-28'>
    <img src={Bg} alt="img" className='box w-[95vw] rounded-[45px] mx-[32px]'/>
    </div>
    <div className='text-container' style={{ opacity: 0, transform: 'translateY(0vh)' }}>
        <Letscollab/>
    </div>
    </div>
  )
}

export default Background