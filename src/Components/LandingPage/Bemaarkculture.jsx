import styled, { keyframes, css } from "styled-components";
import CultureImg1 from "../../Images/Culture/CultureImg1.jpeg"
import CultureImg2 from "../../Images/Culture/CultureImg2.jpeg"
import CultureImg3 from "../../Images/Culture/CultureImg3.jpeg"
import CultureImg4 from "../../Images/Culture/CultureImg4.jpeg"
import CultureImg5 from "../../Images/Culture/CultureImg5.jpeg"
import CultureImg6 from "../../Images/Culture/CultureImg6.jpg"
import CultureImg7 from "../../Images/Culture/CultureImg7.jpg"
import CultureImg8 from "../../Images/Culture/CultureImg8.jpeg"
import CultureImg9 from "../../Images/Culture/CultureImg9.jpeg"
import CultureImg10 from "../../Images/Culture/CultureImg10.jpeg"
const Bemaarkculture = () => {

  return (
    <div className="bg-white w-[100vw] md:h-[120vh] h-[100vh] flex flex-row items-center justify-center">
        <h1 className="md:text-8xl text-4xl text-center z-0 absolute"><span className="text-[#7B36FF] font-Halenior-light">Culture at</span> <br /> <span className="text-[#c2ff00] font-Halenior-bold md:text-[150px] text-7xl">Bemaark</span></h1>
        
        
        
        <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
          <img src={CultureImg1} alt="" className="z-10 md:w-52 w-32"/>
          <img src={CultureImg3} alt="" className="z-10 md:w-52 w-32"/>
          </MarqueeGroup>
          <MarqueeGroup>
          <img src={CultureImg1} alt="" className="z-10 md:w-52 w-32"/>
          <img src={CultureImg3} alt="" className="z-10 md:w-52 w-32"/>
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
          <img src={CultureImg2} alt="" className="z-10 md:w-64 w-32"/>
          <img src={CultureImg5} alt="" className="z-10 md:w-64 w-32"/>
          </MarqueeGroup2>
          <MarqueeGroup2>
          <img src={CultureImg2} alt="" className="z-10 md:w-64 w-32"/>
          <img src={CultureImg5} alt="" className="z-10 md:w-64 w-32"/>
          </MarqueeGroup2>
        </Marquee>
        <Marquee>
          <MarqueeGroup3>
          <img src={CultureImg4} alt="" className="z-10 md:w-64 w-32"/>
          <img src={CultureImg6} alt="" className="z-10 md:w-64 w-32"/>
          </MarqueeGroup3>
          <MarqueeGroup3>
          <img src={CultureImg4} alt="" className="z-10 md:w-64 w-32"/>
          <img src={CultureImg6} alt="" className="z-10 md:w-64 w-32"/>
          </MarqueeGroup3>
        </Marquee>
      </Wrapper>
    </AppContainer>
    </div>
  )
}

export default Bemaarkculture

const AppContainer = styled.div`
  width: 100vw;
  height: 25vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
  user-select: none;
  margin-bottom: 30px;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
  animation-duration:15s;
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-delay: -3s;
  animation-duration:15s
`;
const MarqueeGroup3 = styled.div`
  ${common}
  animation-delay: -6s;
  animation-duration:15s
`;
