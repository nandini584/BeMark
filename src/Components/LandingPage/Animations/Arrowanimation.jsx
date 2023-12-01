import React from 'react';
import { useSpring, animated } from 'react-spring';
import Arrow from "../../../Images/TiitArrow.svg"
const DiagonalArrowAnimation = () => {
  const [isHovered, setHovered] = React.useState(false);

  const arrowAnimation = useSpring({
    to: async (next) => {
      while (isHovered) {
        await next({ left: '100%', top: '100%', opacity: 0 });
        await next({ left: '0%', top: '0%', opacity: 1 });
      }
    },
    reset: true, // Reset the animation when it's not in view
  });

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        width: '100px', // Adjust the width and height based on your box size
        height: '100px',
        overflow: 'hidden', // Clip the arrow when it moves out of the container
      }}
    >
      <animated.div
        style={{
          position: 'absolute',
          width: '30px', // Adjust the width and height based on your arrow icon size
          height: '30px',
          ...arrowAnimation,
        }}
      >
        <img src={Arrow} alt="" />
        <ArrowIcon />
      </animated.div>
    </div>
  );
};

const ArrowIcon = () => (
  // Replace this with your arrow icon component or SVG
  <div
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      transformOrigin: '0% 0%', // Set transform origin to top-left
    }}
  >
    &#8594;
  </div>
);

export default DiagonalArrowAnimation;
