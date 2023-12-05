import DownArrow from "../../Images/DownArrow.svg"
import NandiniArrow from "../../Images/Playboard/NandiniArrow.svg"
import PriyaArrow from "../../Images/Playboard/PriyaArrow.svg"
import SatyarishiArrow from "../../Images/Playboard/SatyarishiArrow.svg"
import Amit from "../../Images/Playboard/AmitPlay.svg"
import Nandini from "../../Images/Playboard/NandiniPlay.svg"
import Priya from "../../Images/Playboard/PriyaPlay.svg"
import PriyaImg from "../../Images/Priya.svg"
import AmitImg from "../../Images/Amit.svg"
import NandiniImg from "../../Images/Nandini.jpeg"
import {motion} from "framer-motion"
import DropDown from "./DropDown"
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const PlayBoard = () => {
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
    <div>
      <div className="inline-block md:hidden h-[100vh] bg-[#7B36FF] w-[100vw] mt-14 py-20 px-6">
      <div>
      <img
        src={NandiniArrow}
        alt=""
        className="w-12 z-20 relative top-[-52px] left-[-10px]"
      />
        </div>
      <div>
      <img
        src={SatyarishiArrow}
        alt=""
        className="w-16 z-20 relative top-40 left-28"
      />
        </div>
      <div>
      <img
        src={PriyaArrow}
        alt=""
        className="w-12 z-20 relative top-8 left-56"
      />
        </div>
      <div>
      <img
        src={PriyaArrow}
        alt=""
        className="w-12 z-20 relative top-72 left-4"
      />
        </div>
      <div>
      <img
        src={SatyarishiArrow}
        alt=""
        className="w-12 z-20 relative top-32 left-[240px]"
      />
      <img
        src={Amit}
        alt=""
        className="w-10 z-20 relative top-[-215px] left-56"
      />
      <img
        src={Nandini}
        alt=""
        className="w-10 z-20 relative top-[-80px] left-8"
      />
      <img
        src={Priya}
        alt=""
        className="w-10 z-20 relative top-[-64px] left-[240px]"
      />
      <img
        src={Amit}
        alt=""
        className="w-10 z-20 relative top-[-30px] left-[-10px]"
      />
      <img
        src={Priya}
        alt=""
        className="w-10 z-20 relative top-28 left-52"
      />
        </div>
      <h1 className="font-Halenior-semibold text-[25px] text-center text-white mt-[-360px]">Together, delivering exceptional results through creative minds.</h1>
        <h1 className="font-Halenior-regular text-sm text-center text-white pt-52">Meet our creative team.</h1>
        <h1 className="font-Halenior-regular text-sm text-center text-white ">Open it from the desktop to be fully amazed!</h1>
        <h1 className="font-Halenior-regular text-sm text-center text-white pt-8">... or explore further</h1>
      </div>
   
    <div className="hidden md:block">
      <div 
      className="h-[110vh] box bg-[#7B36FF] flex flex-col items-center mt-20">
        <div className="relative top-32 right-[500px] w-24">
          <DropDown src={Amit} src2={AmitImg} name="Satyarishi" content="Sometimes you just have to look at <br/> the big picture, and by that, I mean <br/> the office poster that says ‘Success is <br/> a journey, not a destination.’ That’s what <br/> I tell myself every time I accidentally <br/> delete a spreadsheet."/>
        </div>
        <div className="relative top-[420px] right-[382px] w-24">
          <DropDown src={Nandini} src2={NandiniImg} name="Nandini Arora" content="A chief design officer, <br/> Art directing with glee, Until clients say, <br/> “No.”"/>
        </div>
        <div className="relative top-24 left-[480px] z-10 w-24">
          <DropDown src={Priya} src2={PriyaImg} name="Priya Gupta" content="Priya, a chill project manager, strolls <br/> around with a notepad and phone. <br/> <br/> Priya: Hey guys, what’s the word? <br/> Satyarishi, Website? <br/> Satyarishi: Looking sharp! <br/> Priya: Nandini, dev? <br/> Nandini: Poppin’ off! <br/> BOSS Sydney enters. <br/> Sydney: How’s it hangin? <br/> Priya: All good in the sister hood! I’m feeling <br/> the smell of the release from the hall. They all high-five and Priya wakes up. "/>
        </div>
        <div className="relative top-[320px] left-[496px] z-10 w-24">
          <DropDown src={Amit} src2={AmitImg} name="Satyarishi" content="When clients say ‘make it pop’  <br/>  I take a breath, and then I stop  <br/> Do they want it big, bright, or bold? <br/>  I wish their instructions weren’t so cold <br/>   <br/> But I’ll add some sparkle, a dash of pizazz <br/>  And hope they like it, no need for jazz  <br/> So ‘make it pop’ they always say  <br/> I’ll do my best, come what may!"/>
        </div>
        <div className="relative top-32 left-[200px] z-10 w-24">
          <DropDown src={Priya} src2={PriyaImg} name="Priya Gupta" content="function singSong() { const lyrics = [ “Some <br/> code got the real problems”, <br/> “Some code out of luck”, <br/> “Some code think I can solve them”, <br/> “Lord debugger above”, <br/> “”, <br/> “I’m only a developer, after all”, <br/> “I’m only a developer, after all”, <br/> “Don’t put your bugs on me”, <br/> “Don’t put your bugs on me”, <br/> “”, <br/> “I’m only a human, I make mistakes”, <br/> “I’m only a human, that’s all it takes”, <br/> “To create some bugs in code”, <br/> “Don’t put your bugs on me”, <br/> “”, <br/> “I’m no code wizard or magician”, <br/> “Should go looking somewhere indocumentation”, <br/> “I’m only a developer after all”, <br/> “I’m only a developer after all”, <br/> “Don’t put your bugs on me”, <br/> “Don’t put your bugs on me” <br/> ];"/>
        </div>
        <motion.div
         animate={{ x: [0, 100, 0, 50, -200, 0, 0], y:[0, 50, 0, -100, -100, 100, 0] }}
         transition={{ duration: 30, repeat: Infinity }}
         style={{zIndex:100}}
        >
        <div>
      <img
        src={SatyarishiArrow}
        alt=""
        className="w-24 z-20 relative bottom-32 left-10"
      />
        </div>
    </motion.div>
        <motion.div
      animate={{ x: [0, 50, 0, 25, -100, 0, 0], y:[0, 25, 0, -50, -50, 50, 0] }}
      transition={{ duration: 20, repeat: Infinity }}
      style={{zIndex:100}}
    >
        <div>
      <img
        src={PriyaArrow}
        alt=""
        className="w-16 z-20 relative bottom-12 right-48"
      />
        </div>
    </motion.div>
    <motion.div
      animate={{ x: [0, 0, -200, 50, 0, 100, 0], y:[0, 100, -100, -100, 0, 50, 0] }}
      transition={{ duration: 30, repeat: Infinity }}
      style={{zIndex:100}}
    >
        <div>
      <img
        src={NandiniArrow}
        alt=""
        className="w-20 z-20 relative top-24 right-64"
      />
        </div>
    </motion.div>
    <motion.div
      animate={{ x: [0, 0, -100, 25, 0, 50, 0], y:[0, 50, -50, -50, 0, 25, 0] }}
      transition={{ duration: 30, repeat: Infinity }}
      style={{zIndex:100}}
    >
        <div>
      <img
        src={SatyarishiArrow}
        alt=""
        className="w-24 z-20 relative left-80 bottom-10"
      />
        </div>
    </motion.div>
    <motion.div
      animate={{ x: [0, 0, -50, 12, 0, 25, 0], y:[0, 25, -25, -25, 0, 12, 0] }}
      transition={{ duration: 30, repeat: Infinity }}
      style={{zIndex:100}}
    >
        <div>
      <img
        src={PriyaArrow}
        alt=""
        className="w-16 z-20 relative bottom-64 right-[550px]"
      />
        </div>
    </motion.div>
        <h1 className="font-Halenior-medium text-8xl text-center text-white w-[65vw] mt-[-490px]">Together, delivering exceptional results through creative minds.</h1>
        <h1 className="font-Halenior-medium text-xl text-center text-white w-[50vw] mt-32">This is a ... board.</h1>
        <h1 className="font-Halenior-medium text-xl text-center text-white w-[50vw]">You can click on our comments and read them.</h1>
        <h1 className="font-Halenior-medium text-xl text-center text-white w-[50vw]">Yeah, that’s all.</h1>
        <h1 className="font-Halenior-medium text-lg text-center text-white w-[50vw] mt-10">... or explore further</h1>
        <div className="border-2 rounded-full mt-6 hover:bounce">
        <KeyboardArrowDownIcon style={{color:"white", fontSize:"40px"}} />
        </div>
    </div>
    </div>
    </div>
  )
}

export default PlayBoard