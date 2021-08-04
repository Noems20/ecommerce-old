import styled from 'styled-components';

export const Container = styled.div`
  grid-column: full-start / full-end;
  margin: 5rem 3rem;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem;

  /* @media only screen and (min-width: 1600px) {
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  }
  @media only screen and (min-width: 1900px) {
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  } */
`;
