import Videobg from '../../Video/bemaarkvid.mp4';
import gsap from 'gsap'
import ScrollTrigger from 'gsap';
import {useEffect} from "react"
gsap.registerPlugin(ScrollTrigger)
const Video = () => {
  useEffect(()=>{
    gsap.to(".vid",{
      scrollTrigger:{
        trigger:".video-container",
        start:"top center",
        end:"bottom center",
        scrub:0.5,
        duration:0.7,
        ease:"expo.in"
      },
    },[])
  })
  return (
    <div className='bg-white video-container'>
      <video
        src={Videobg}
        className='vid'
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Video;
