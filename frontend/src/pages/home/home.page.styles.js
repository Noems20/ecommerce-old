import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;

  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
`;

export const HeroSection = styled.div`
  grid-column: full-start / full-end;
  margin: 2rem 3rem;
  border-radius: 30px;
  height: calc(100vh - 12rem);

  background: rgb(0, 83, 162);
  background: linear-gradient(
    90deg,
    rgba(80, 171, 255, 1) 0%,
    rgba(27, 116, 198, 1) 59%,
    rgba(0, 83, 162, 1) 100%
  );

  @media only screen and (max-width: 650px) {
    height: calc(100vh - 17rem);
  }
`;

export const CategoriesBar = styled.div`
  grid-column: full-start / full-end;
  margin: 0 3rem;
  margin-top: 3rem;
  height: 30rem;

  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const BarItem = styled.div`
  border-radius: 20px;
  background-color: blue;

  background: rgb(0, 83, 162);
  background: linear-gradient(
    90deg,
    rgba(80, 171, 255, 1) 0%,
    rgba(27, 116, 198, 1) 59%,
    rgba(0, 83, 162, 1) 100%
  );
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 3.5rem;
  text-align: center;
  text-transform: uppercase;
`;

export const ProductsContainer = styled.div`
  grid-column: full-start / full-end;
  margin: 3rem 4rem;

  display: grid;
  grid-gap: 3rem;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  grid-gap: 2rem;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  }
`;
