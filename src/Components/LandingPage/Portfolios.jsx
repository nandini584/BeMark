import styled, { createGlobalStyle } from "styled-components";
import Billboard from "../../Images/Porfolios/Billboard.svg"
import Packaging from "../../Images/Porfolios/Packaging.svg"
import PrintDesign from "../../Images/Porfolios/PrintDesign.svg"
import Stationery from "../../Images/Porfolios/Stationery.svg"
import WebWork from "../../Images/Porfolios/WebWork.svg"
import HorizontalScroll from "./Portfolios/portfolio";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

const Main = styled.main``;

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const PortfolioImage = styled.img`
  width: 90%; 
  height: auto;
`;

const PortfoliosComponent = () => (
  <>
    <PortfolioImage src={Billboard} alt="Billboard" />
    <PortfolioImage src={Packaging} alt="Packaging" />
    <PortfolioImage src={PrintDesign} alt="Print Design" />
    <PortfolioImage src={Stationery} alt="Stationery" />
    <PortfolioImage src={WebWork} alt="Web Work" />
  </>
);
const Portfolios = () => (
  <div>
    <div className="md:hidden flex flex-col">
    <img src={Billboard} alt="Billboard" className=""/>
    <img src={Packaging} alt="Packaging" />
    <img src={PrintDesign} alt="Print Design" />
    <img src={Stationery} alt="Stationery" />
    <img src={WebWork} alt="Web Work" />
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
export default Portfolios