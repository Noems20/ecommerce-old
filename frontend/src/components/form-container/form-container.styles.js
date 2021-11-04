import styled from 'styled-components';
import tokens from '../../tokens';
import background from './background.jpg';

export const Container = styled.div`
  /* height: calc(100vh - 8rem); */

  background-image: linear-gradient(
      90deg,
      rgba(224, 20, 53, 0.9) 0%,
      rgba(212, 21, 53, 0.9) 50%,
      rgba(255, 25, 64, 0.9) 100%
    ),
    url(${background});
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
`;

export const Content = styled.div`
  grid-column: col-start 3 / col-end 6;
  margin: 7.6rem 0;
  padding: 4rem 6rem;
  background-color: #fff;
  border-radius: 5px;

  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr;
  justify-items: center;

  z-index: 1;
`;

export const Logo = styled.img`
  width: 15%;
`;

export const FormTitle = styled.h1`
  font-family: ${tokens.fontPrimary};
  font-size: 2.5rem;
  /* text-transform: uppercase; */
  font-weight: 700;
`;

export const Form = styled.form`
  width: 100%;

  display: grid;
  grid-gap: 2rem;
`;
