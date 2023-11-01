import Amit from "../../Images/Amit.svg"
import Priya from "../../Images/Priya.svg"
import Play from "../../Images/Play.svg"
import { useEffect, useRef } from "react"
import gsap from 'gsap'
import SplitType from 'split-type'
const Watchus = () => {
  const textRef = useRef(null);

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
    <div className="flex flex-col w-[28vw]">
        <h1 className="text-2xl font-Halenior-medium leading-none tracking-tight mb-8">Revolutionizing creativity, design, and innovation, empowering entrepreneurs with accessible, purpose-driven solutions. Join us in this transformative creative journey.</h1>
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
            <img src={Amit} alt="amit" className="mr-4 w-[60px]"/>
            <img src={Priya} alt="priya" className="w-[60px]"/>
            </div>
            <div className="flex flex-row items-center">
                <h1 className="text-base font-Halenior-semibold mr-4">Watch us</h1>
                <img src={Play} alt="watch us" className="w-9 cursor-pointer"/>
            </div>
        </div>
    </div>
  )
}

export default Watchus