import styled, { createGlobalStyle } from "styled-components";
import Line2 from "../../Images/Slice 1.svg"
import Line1 from "../../Images/Slice 2.svg"
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
`;

const CardsContainer = styled.div`
  position: relative;
  height: 30%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const PortfolioImage = styled.img`
  width: 100%; 
  height: 110px;
`;

const PortfoliosComponent = () => (
  <>
    <PortfolioImage src={Line1} alt="Stationery" />
    <PortfolioImage src={Line2} alt="Web Work" />
  </>
);
const Liner = () => (
  <div>
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
export default Liner