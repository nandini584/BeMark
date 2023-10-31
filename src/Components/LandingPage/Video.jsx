import Videobg from "../../Video/videomp4.mp4"
const Video = () => {
  return (
    <div className="">
      <video src={Videobg} autoPlay loop muted />
    </div>
  )
}

export default Video
