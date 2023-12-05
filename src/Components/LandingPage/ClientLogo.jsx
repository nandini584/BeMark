import styled, { keyframes, css } from "styled-components";
import Logo1 from "../../Images/Client logo/Logo-11 1.svg"
import Logo2 from "../../Images/Client logo/Logo-12 1.svg"
import Logo3 from "../../Images/Client logo/Logo-13 1.svg"
import Logo4 from "../../Images/Client logo/Logo-14 1.svg"
import Logo5 from "../../Images/Client logo/Logo-15 1.svg"
import Logo6 from "../../Images/Client logo/Logo-16 1.svg"
import Logo7 from "../../Images/Client logo/Logo-17 1.svg"
import Logo8 from "../../Images/Client logo/Logo-18 1.svg"
import Logo9 from "../../Images/Client logo/Logo-19 1.svg"
import Logo10 from "../../Images/Client logo/Logo-20 1.svg"
import Logo11 from "../../Images/Client logo/Logo-21 1.svg"
import { AltClients } from "./AltClients";
const ClientLogo = () => {
    const row1 = [
      Logo1,
      Logo2,
      Logo3,
      Logo4,
      Logo5,
      
    ];
    const row2 = [
      Logo6,
      Logo7,
      Logo8,
      Logo9,
      Logo10,
      
    ]
  return (
    <div>
      <div className="md:hidden flex flex-col ">
        <AltClients/>
      </div>
    <div className="hidden md:block">
    <AppContainer>
        <Wrapper>
            <Marquee>
                <MarqueeGroup>
                    {row1.map((logo, i) => (
                        <img src={logo} key={i} alt="client_logos" className="w-[306px] px-8 pb-8"/>
                        ))}
                </MarqueeGroup>
                <MarqueeGroup>
                    {row1.map((logo, i) => (
                        <img src={logo} key={i} alt="client_logos" className="w-[306px] px-16 pb-8"/>
                        ))}
                </MarqueeGroup>
            </Marquee>
            <Marquee>
                <MarqueeGroup2>
                {row2.map((logo, i) => (
                        <img src={logo} key={i} alt="client_logos" className="w-[306px] px-16 pb-8"/>
                        ))}
                </MarqueeGroup2>
                <MarqueeGroup2>
                {row2.map((logo, i) => (
                        <img src={logo} key={i} alt="client_logos" className="w-[306px] px-16 pb-8"/>
                        ))}
                </MarqueeGroup2>
            </Marquee>
        </Wrapper>
    </AppContainer>
    </div>
    </div>
  )
}

export default ClientLogo

const AppContainer = styled.div`
  width: 100vw;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
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
