import Stock1 from "../../Images/Stock1.svg";
import Stock2 from "../../Images/Stock2.svg";
import Stock3 from "../../Images/Stock3.svg";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mesh = () => {
  useEffect(() => {
    gsap.to(".box", {
      scrollTrigger: {
        trigger: ".box",
        start: "top bottom",
        end: "bottom center",
        duration:0.7,
        scrub: 0.5
      },
      borderRadius: "40px",
      marginLeft: "28px",
      marginRight: "28px",
      ease: "expo.in",
    });
  }, []);

  return (
    <div className="">
      <div className="inline-block md:hidden mb-12">
        <div className="bg-hero py-16 text-white md:font-Halenior-semibold font-Halenior-medium flex flex-col items-center justify-center md:px-[60px] px-[24px]">
          <h1 className="md:text-8xl text-xl font-Halenior-semibold">
            Bemaark was born from the passion of young{" "}
            <img src={Stock1} alt="Young" className="inline w-20" /> enthusiasts
            eager to create something exceptional,{" "}
            <img src={Stock2} alt="Creative" className="inline w-20" /> fostering
            a unique, empathetic, and collaborative{" "}
            <img src={Stock3} alt="unique" className="inline w-20" />workspace.
          </h1>
        </div>
      </div>
      <div className="hidden md:inline-block">
        <div className="bg-hero box h-[130vh] rounded-none text-white font-Halenior-semibold flex flex-col items-center justify-center px-[70px]">
          <h1 className="text-8xl font-Halenior-semibold">
            Bemaark was born from the passion of young{" "}
            <img src={Stock1} alt="Young" className="inline w-80" /> enthusiasts
            eager to create something exceptional,{" "}
            <img src={Stock2} alt="Creative" className="inline w-80" /> fostering{" "}
            <img src={Stock3} alt="unique" className="inline w-80" /> a unique,
            empathetic, and collaborative workspace.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Mesh;
