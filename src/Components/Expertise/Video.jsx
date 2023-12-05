import Videobg from '../../Video/bemaarkvid.mp4';
import gsap from 'gsap'
import {useEffect} from "react"
import ScrollTrigger from 'gsap';
gsap.registerPlugin(ScrollTrigger)
const Video = () => {
    useEffect(()=>{
        gsap.to(".box",{
            scrollTrigger:{
                trigger:".box",
                start:"top center",
                end:"bottom center",
                scrub:0.5,
                duration:0.7,
                ease:"expo.in"
            },
            borderRadius:"0px",
            width: "100vw",
            margin:"0"
        })
    },[])
  return (
    <div className='bg-white'>
      <video
        src={Videobg}
        className='mt-28 box w-[95vw] rounded-[45px] mx-[32px]'
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Video;