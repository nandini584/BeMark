import DownArrow from "../../Images/DownArrow.svg"
import Img1 from "../../Images/Playboard/Img1.svg"
import Img2 from "../../Images/Playboard/Img2.svg"
import Img3 from "../../Images/Playboard/Img3.svg"
import Img4 from "../../Images/Playboard/Img4.svg"
import Img5 from "../../Images/Playboard/Img5.svg"
import Maria from "../../Images/Playboard/Maria.svg"
import John from "../../Images/Playboard/John.svg"
import Chris from "../../Images/Playboard/Chris.svg"
import Lily from "../../Images/Playboard/Lily.svg"
import Sydney from "../../Images/Playboard/Sydney.svg"
import Arrow1 from "../../Images/Playboard/Arrow1.svg"
import Arrow2 from "../../Images/Playboard/Arrow2.svg"
import Arrow3 from "../../Images/Playboard/Arrow3.svg"
import Arrow4 from "../../Images/Playboard/Arrow4.svg"
import Arrow5 from "../../Images/Playboard/Arrow5.svg"
import {motion} from "framer-motion"
import DropDown from "./DropDown"
const PlayBoard = () => {

  return (
    <>
      <motion.div 
      initial={{borderRadius:0}}
      whileInView={{borderRadius:40, marginLeft:30, marginRight: 30}}
      transition={{duration:1.5}}
      className="h-[110vh] bg-[#7B36FF] flex flex-col items-center mt-20">
        <div className="relative top-32 right-[500px] w-24">
          <DropDown src={Img1} src2={Maria} name="Maria Stanley" content="Sometimes you just have to look at <br/> the big picture, and by that, I mean <br/> the office poster that says ‘Success is <br/> a journey, not a destination.’ That’s what <br/> I tell myself every time I accidentally <br/> delete a spreadsheet."/>
        </div>
        <div className="relative top-[420px] right-[382px] w-24">
          <DropDown src={Img2} src2={Sydney} name="Sydney Brilkova" content="A chief design officer, <br/> Art directing with glee,Until clients say, <br/> “No.”"/>
        </div>
        <div className="relative top-24 left-[480px] z-10 w-24">
          <DropDown src={Img4} src2={Lily} name="Lily Christine" content="Lily, a chill project manager, strolls <br/> around with a notepad and phone. <br/> <br/> Lily: Hey guys, what’s the word? <br/> Maria, Website? <br/> Maria: Looking sharp! <br/> Lily: Chris, dev? <br/> Chris: Poppin’ off! <br/> BOSS Sydney enters. <br/> Sydney: How’s it hangin? <br/> Lily: All good in the sister hood! I’m feeling <br/> the smell of the release from the hall. They all high-five and Lily wakes up. "/>
        </div>
        <div className="relative top-[320px] left-[496px] z-10 w-24">
          <DropDown src={Img3} src2={John} name="Chris Martinova" content="When clients say ‘make it pop’  <br/>  I take a breath, and then I stop  <br/> Do they want it big, bright, or bold? <br/>  I wish their instructions weren’t so cold <br/>   <br/> But I’ll add some sparkle, a dash of pizazz <br/>  And hope they like it, no need for jazz  <br/> So ‘make it pop’ they always say  <br/> I’ll do my best, come what may!"/>
        </div>
        <div className="relative top-32 left-[200px] z-10 w-24">
          <DropDown src={Img5} src2={Chris} name="John Savoshevich" content="function singSong() { const lyrics = [ “Some <br/> code got the real problems”, <br/> “Some code out of luck”, <br/> “Some code think I can solve them”, <br/> “Lord debugger above”, <br/> “”, <br/> “I’m only a developer, after all”, <br/> “I’m only a developer, after all”, <br/> “Don’t put your bugs on me”, <br/> “Don’t put your bugs on me”, <br/> “”, <br/> “I’m only a human, I make mistakes”, <br/> “I’m only a human, that’s all it takes”, <br/> “To create some bugs in code”, <br/> “Don’t put your bugs on me”, <br/> “”, <br/> “I’m no code wizard or magician”, <br/> “Should go looking somewhere indocumentation”, <br/> “I’m only a developer after all”, <br/> “I’m only a developer after all”, <br/> “Don’t put your bugs on me”, <br/> “Don’t put your bugs on me” <br/> ];"/>
        </div>
        <motion.div
         animate={{ x: [0, 100, 0, 50, -200, 0, 0], y:[0, 50, 0, -100, -100, 100, 0] }}
         transition={{ duration: 30, repeat: Infinity }}
         style={{zIndex:100}}
        >
        <div>
      <img
        src={Arrow1}
        alt=""
        className="w-16 z-20 relative bottom-32 left-10"
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
        src={Arrow2}
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
        src={Arrow3}
        alt=""
        className="w-16 z-20 relative top-24 right-64"
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
        src={Arrow4}
        alt=""
        className="w-16 z-20 relative left-80 bottom-10"
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
        src={Arrow5}
        alt=""
        className="w-16 z-20 relative bottom-64 right-[550px]"
      />
        </div>
    </motion.div>
        <h1 className="font-Halenior-medium text-8xl text-center text-white w-[65vw] mt-[-470px]">Together, delivering exceptional results through creative minds.</h1>
        <h1 className="font-Halenior-medium text-xl text-center text-white w-[50vw] mt-32">This is a ... board.</h1>
        <h1 className="font-Halenior-medium text-xl text-center text-white w-[50vw]">You can click on our comments and read them.</h1>
        <h1 className="font-Halenior-medium text-xl text-center text-white w-[50vw]">Yeah, that’s all.</h1>
        <h1 className="font-Halenior-medium text-lg text-center text-white w-[50vw] mt-10">... or explore further</h1>
        <img src={DownArrow} alt="explore" className="mt-4 w-9" />
    </motion.div>
    </>
  )
}

export default PlayBoard