import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 8rem);
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 650px) {
    height: calc(100vh - 13rem);
  }
`;

export const LogoContainer = styled.div`
  width: 25%;

  @media only screen and (max-width: 1100px) {
    width: 30%;
  }

  @media only screen and (max-width: 768px) {
    width: 40%;
  }

  @media only screen and (max-width: 650px) {
    width: 50%;
  }
`;
