import HorizontalScroll from "./Portfolios/portfolio";
import styled, { createGlobalStyle } from "styled-components";
import Line1 from "../../Images/Liner1.svg"
import Line2 from "../../Images/Liner2.svg"
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

// const Heading = styled.div`
//   width: 100%;
//   height: auto;
// `;
const HeadingImg = styled.img`
  width: 1000px; 
  height: auto;
`;

const Heading = () => (
  <>
    <HeadingImg src={Line1} alt="Billboard" />
    <HeadingImg src={Line2} alt="Packaging" />
  </>
);
const Statement = () => (
  // Add parentheses to wrap the JSX
  <>
    <Heading className="text-[200px] font-Halenior-bold"> A Remarkable Presence</Heading>
  </>
);

const Liner = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <HorizontalSection>
          <HorizontalScroll>
            <CardsContainer>
              <Statement />
            </CardsContainer>
          </HorizontalScroll>
        </HorizontalSection>
      </Main>
    </>
  );
};

export default Liner;
