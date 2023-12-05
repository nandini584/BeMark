import Amit from "../../Images/Amit.svg"
import Priya from "../../Images/Priya.svg"
import Nandini from "../../Images/Nandini.jpeg"
import Play from "../../Images/Play.svg"
import { useEffect, useRef } from "react"
import gsap from 'gsap'
import SplitType from 'split-type'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const Watchus = () => {

  const textRef = useRef(null);
  const handleMousemove = (e) => {
    const cursor = document.querySelector('.cursor');
    gsap.to(cursor, { duration: 0.3, left: e.pageX, top: e.pageY, ease: 'power2.out' });
  };

  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { ease: 'SlowMo.easeOut' } });
    t1.to('.our-text', {
      y: '0%',
      duration: 0.7,
      stagger: 0.4,
    });
  }, []);

  useEffect(() => {
    // Add an event listener for mousemove
    document.addEventListener('mousemove', handleMousemove);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMousemove);
    };
  }, []);
  useEffect(() => {
    const ourText = new SplitType(textRef.current, { types: 'chars' });
    const chars = ourText.chars;

    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power4.out',
      }
    );
  }, []);
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(".singleLine div ", {
      y: 200,
      ease: "power4.out",
      delay: 1,
      duration: 1.8,
      stagger: {
        amount: 0.4,
      },
    });

    return () => {};
  });
  return (
    <div className="flex flex-col md:w-[26vw] bg-white">
        <h1 className="md:text-xl text-base font-Halenior-semibold tracking-tight main-text"><span className="our-text">Revolutionizing creativity, design, and </span> </h1 >
         <h1 className="md:text-xl text-base font-Halenior-semibold tracking-tight main-text"><span className="our-text">innovation, empowering entrepreneurs with  </span> </h1>
         <h1 className="md:text-xl text-base font-Halenior-semibold tracking-tight main-text"> <span className="our-text">accessible, purpose-driven solutions. Join </span></h1>
         <h1 className="md:text-xl text-base font-Halenior-semibold tracking-tight mb-4 md:mb-4 main-text"> <span className="our-text">us in this transformative creative journey.</span></h1>
        <div className="flex flex-row items-center justify-between bg-white mt-6">
            <div className="flex flex-row items-center bg-white">
            <img src={Amit} alt="Co-founder" className="mr-2 md:w-[60px] w-[40px]"/>
            <img src={Priya} alt="Co-founder" className="md:w-[60px] mr-2 w-[40px]"/>
            <img src={Nandini} alt="Developer" className="md:w-[60px] w-[40px] rounded-full"/>
            </div>
            <div className="flex flex-row items-center bg-white">
                <h1 className="lg:text-base text-xs font-Halenior-semibold mr-2">Watch us</h1>
    <div className="border-black border-2 rounded-full cursor-pointer z-10 relative overflow-hidden mr-4">
      <div className="circle" style={{ position: 'relative', width: '36px', height: '36px'}}>
        <PlayArrowIcon style={{ color: 'black' }} className="icon z-100 hover:color-white" />
        <div className="fill bg-black"></div>
      </div>
    </div>
            </div>
        </div>
        <div className="cursor" onMouseMove={handleMousemove}></div>
    </div>
  )
}

export default Watchus