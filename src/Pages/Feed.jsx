import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Feed = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity:1,
        scale:1,
        transformOrigin: ['100% 0%', '100% 0%'],
      });
    }
  }, [controls, inView]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className='h-[140vh] bg-yellow-200 w-[100vw] mb-20'></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0}} // Initial state before in view
        transition={{
          ease: 'linear',
          duration: 0.6,
        }}
        animate={controls}
        className='box w-[25vw] h-[40vh] bg-pink-400 rounded-xl flex flex-col items-center justify-center'
      >
         <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="z-100"
        >
          Your Text Here
        </motion.div>
      </motion.div>
      <div className='h-[140vh] bg-yellow-200 w-[100vw] mt-20'></div>
    </div>
  );
};

export default Feed;
