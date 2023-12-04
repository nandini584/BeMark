import styled, { createGlobalStyle } from "styled-components";
import Portfolio1 from "../../Images/Porfolios/Portfolio1.png";
import Portfolio2 from "../../Images/Porfolios/Portfolio2.png";
import Portfolio3 from "../../Images/Porfolios/Portfolio3.png";
import HorizontalScroll from "./Portfolios/portfolio";
import Tag from "../Portfolio/Tag"
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
  }
`;

const Main = styled.main`
  width: 400%;
`;

const HorizontalSection = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
`;

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const PortfolioImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const PortfoliosComponent = () => (
  <>
    <div className="relative">
      <PortfolioImage src={Portfolio1} alt="Billboard" />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
        <div className="flex flex-row items-center justify-between relative right-[37vw] top-[30vh]">
        <h1 className=' md:font-Halenior-semibold text-white md:text-5xl text-2xl '>Yordax</h1>
        <div className="relative left-[75vw]">
        <Tag tag={2022}/>
        </div>
        </div>
        <h1 className=' font-Halenior-semibold text-base text-white relative right-[13.5vw] top-[36vh]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic facilis dolorem, porro, ab dolore volup. Lorem ipsum dolor sit amet<br /> rerum sit ab tempora obcaecati nisi enim unde at sed vel voluptatem tempore repudiandae assumenda quis praesentium dolorum?</h1>
      </div>
    </div>
    <div className="relative">
      <PortfolioImage src={Portfolio2} alt="Packaging" />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
        <div className="flex flex-row items-center justify-between relative right-[37vw] top-[30vh]">
        <h1 className=' md:font-Halenior-semibold text-white md:text-5xl text-2xl '>Yordax</h1>
        <div className="relative left-[75vw]">
        <Tag tag={2022}/>
        </div>
        </div>
        <h1 className=' font-Halenior-semibold text-base text-white relative right-[13.5vw] top-[36vh]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic facilis dolorem, porro, ab dolore volup. Lorem ipsum dolor sit amet<br /> rerum sit ab tempora obcaecati nisi enim unde at sed vel voluptatem tempore repudiandae assumenda quis praesentium dolorum?</h1>
      </div>
    </div>
    <div className="relative">
      <PortfolioImage src={Portfolio3} alt="Print Design" />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
        <div className="flex flex-row items-center justify-between relative right-[37vw] top-[30vh]">
        <h1 className=' md:font-Halenior-semibold text-white md:text-5xl text-2xl '>Yordax</h1>
        <div className="relative left-[75vw]">
        <Tag tag={2022}/>
        </div>
        </div>
        <h1 className=' font-Halenior-semibold text-base text-white relative right-[13.5vw] top-[36vh]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic facilis dolorem, porro, ab dolore volup. Lorem ipsum dolor sit amet<br /> rerum sit ab tempora obcaecati nisi enim unde at sed vel voluptatem tempore repudiandae assumenda quis praesentium dolorum?</h1>
      </div>
    </div>
  </>
);

const Portfolios = () => (
  <div>
    <div className="md:hidden flex flex-col">
      <PortfolioImage src={Portfolio1} alt="Billboard" />
      <PortfolioImage src={Portfolio2} alt="Packaging" />
      <PortfolioImage src={Portfolio3} alt="Print Design" />
    </div>
    <div className="md:block hidden">
      <GlobalStyle />
      <Main>
        <HorizontalSection>
          <HorizontalScroll>
            <CardsContainer>
              <PortfoliosComponent />
            </CardsContainer>
          </HorizontalScroll>
        </HorizontalSection>
      </Main>
    </div>
  </div>
);

export default Portfolios;
