import DownArrow from "../../Images/DownArrow.svg"
import Img1 from "../../Images/Img1.svg"
import Img2 from "../../Images/Img2.svg"
import Img3 from "../../Images/Img3.svg"
import Img4 from "../../Images/Img4.svg"
import Img5 from "../../Images/Img5.svg"
import Arrow1 from "../../Images/Arrow1.svg"
import Arrow2 from "../../Images/Arrow2.svg"
import Arrow3 from "../../Images/Arrow3.svg"
import Arrow4 from "../../Images/Arrow4.svg"
import Arrow5 from "../../Images/Arrow5.svg"
import {motion} from "framer-motion"
const PlayBoard = () => {
  return (
      <div className="h-[110vh] bg-[#7B36FF] flex flex-col items-center mt-20">
        <img src={Img1} alt="" className="relative top-32 right-[500px] z-10 w-16" />
        <img src={Img2} alt="" className="relative top-[420px] right-[382px] z-10 w-16" />
        <img src={Img3} alt="" className="relative top-24 left-[380px] z-10 w-16" />
        <img src={Img4} alt="" className="relative top-[320px] left-[496px] z-10 w-16" />
        <img src={Img5} alt="" className="relative top-32 left-[200px] z-10 w-16" />
        <motion.div
      animate={{ x: [0, 100, 0, 50, -200, 0, 0], y:[0, 50, 0, -100, -100, 100, 0] }}
      transition={{ duration: 30, repeat: Infinity }}
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
    >
        <div>
      <img
        src={Arrow5}
        alt=""
        className="w-16 z-20 relative bottom-64 right-[550px]"
      />
        </div>
    </motion.div>
        <h1 className="font-Halenior-medium text-8xl text-center text-white w-[50vw] mt-[-470px]">What’s going on behind the scene? See yourself!</h1>
        <h1 className="font-Halenior-medium text-xl text-center text-white w-[50vw] mt-40">This is a ... board.</h1>
        <h1 className="font-Halenior-medium text-xl text-center text-white w-[50vw]">You can click on our comments and read them.</h1>
        <h1 className="font-Halenior-medium text-xl text-center text-white w-[50vw]">Yeah, that’s all.</h1>
        <h1 className="font-Halenior-medium text-lg text-center text-white w-[50vw] mt-10">... or explore further</h1>
        <img src={DownArrow} alt="explore" className="mt-4 w-9" />
    </div>
  )
}

export default PlayBoard