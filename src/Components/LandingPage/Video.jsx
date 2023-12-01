import React from 'react';
import Videobg from '../../Video/bemaarkvid.mp4';

const Video = () => {
  return (
    <div className='bg-white'>
      <video
        src={Videobg}
        className='mt-28'
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Video;
