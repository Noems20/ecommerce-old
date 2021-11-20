import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 56%;

  @media only screen and (max-width: 500px) {
    width: 70%;
  }
  @media only screen and (max-width: 400px) {
    width: 90%;
  }
`;
