import styled, { keyframes, css } from "styled-components";

function Services() {
  const row1 = [
    "Brand Identity Design",
    "User Interface Design",
    "Digital Marketing Services",
    "Web Development"
  ];

  const row2 = [
    "User Experience Design",
    "Product Photoshoot",
    "Product Video shoot",
    "User Research"
  ];

  return (
    <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el,i) => (
              <h1 key={i} className="text-3xl text-[#1D0B3A] font-Halenior-medium flex flex-col items-center justify-center mb-4 rounded-full py-5">{el}</h1>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, i) => (
              <h1 key={i} className="text-3xl text-[#1D0B3A] font-Halenior-medium flex flex-col items-center justify-center mb-4 rounded-full py-5">{el}</h1>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el, i) => (
             <h1 key={i} className="text-3xl text-[#1D0B3A] font-Halenior-medium flex flex-col items-center justify-center mb-4 rounded-full py-5">{el}</h1>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el, i) => (
              <h1 key={i} className="text-3xl text-[#1D0B3A] font-Halenior-medium flex flex-col items-center justify-center mb-4 rounded-full py-5">{el}</h1>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Services;

const AppContainer = styled.div`
  width: 100vw;
  height: 30vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;
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
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;
