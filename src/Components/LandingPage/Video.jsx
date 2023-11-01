import Videobg from "../../Video/bemaarkvid.mp4"
const Video = () => {
  return (
    <div className="">
      <video src={Videobg} autoPlay loop muted />
    </div>
  )
}

export default Video
