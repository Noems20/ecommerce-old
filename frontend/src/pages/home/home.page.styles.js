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

export const ProductsContainer = styled.div`
  grid-column: full-start / full-end;
  margin: 3rem 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 2rem;

  /* @media only screen and (min-width: 1600px) {
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  }
  @media only screen and (min-width: 1900px) {
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  } */
`;
