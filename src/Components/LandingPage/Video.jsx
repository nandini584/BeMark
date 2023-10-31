import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ReactPlayer
        url="https://youtu.be/ClOLLRF90i4?si=X7bNOWIetpVmbq-r"
        playing={true}
        loop={true}
        className="relative top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default Video;
