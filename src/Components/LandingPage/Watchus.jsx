import Amit from "../../Images/Amit.svg"
import Priya from "../../Images/Priya.svg"
import Nandini from "../../Images/Nandini.jpeg"
import Play from "../../Images/Play.svg"
import { useEffect, useRef } from "react"
import gsap from 'gsap'
import SplitType from 'split-type'
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

  return (
    <div className="flex flex-col lg:w-[28vw]">
        <h1 className="lg:text-2xl text-base font-Halenior-medium leading-none tracking-tight mb-4 md:mb-8">Revolutionizing creativity, design, and innovation, empowering entrepreneurs with accessible, purpose-driven solutions. Join us in this transformative creative journey.</h1>
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
            <img src={Amit} alt="Co-founder" className="mr-2 md:mr-3 md:w-[60px] w-[40px]"/>
            <img src={Priya} alt="Co-founder" className="md:w-[60px] w-[40px]"/>
            <img src={Nandini} alt="Developer" className="md:w-[60px] w-[40px] rounded-full ml-2 md:ml-3"/>
            </div>
            <div className="flex flex-row items-center">
                <h1 className="lg:text-base text-xs font-Halenior-semibold mr-2 lg:mr-4">Watch us</h1>
                <img src={Play} alt="watch us" className="md:w-9 w-6 cursor-pointer"/>
            </div>
        </div>
        <div className="cursor" onMouseMove={handleMousemove}></div>
    </div>
  )
}

export default Watchus