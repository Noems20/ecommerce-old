import styled from 'styled-components';

export const Container = styled.div`
  grid-column: full-start / full-end;
  margin: 3rem 4rem;

  display: grid;
  grid-gap: 6rem;
  grid-template-columns: 1fr 0.4fr;

  @media only screen and (max-width: 1300px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  @media only screen and (max-width: 360px) {
    margin: 3rem;
  }
`;
