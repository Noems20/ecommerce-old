import styled from 'styled-components';
import tokens from '../../tokens';
import background from './background.jpg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  grid-column: full-start / full-end;
  height: auto;
  min-height: calc(100vh - 8rem);
  background-image: linear-gradient(
      90deg,
      rgba(0, 83, 162, 0.9) 0%,
      rgba(0, 83, 162, 0.9) 50%,
      rgba(0, 83, 162, 0.9) 100%
    ),
    url(${background});
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 650px) {
    min-height: calc(100vh - 13rem);
  }
`;

export const Content = styled.div`
  width: 40%;
  background-color: #fff;
  margin: 4rem 0;
  padding: 2rem 5rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  -moz-box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr;
  justify-items: center;

  z-index: 1;

  @media only screen and (max-width: 1350px) {
    width: 60%;
  }

  @media only screen and (max-width: 750px) {
    width: 80%;
  }

  @media only screen and (max-width: 550px) {
    width: 100%;
    padding: 2rem 3rem;
    margin: 6rem 0;
  }
`;

export const Logo = styled.img`
  width: 15%;

  @media only screen and (max-width: 500px) {
    width: 20%;
  }
`;

export const FormTitle = styled.h1`
  /* font-family: ${tokens.fontDisplay}; */
  font-family: inherit;
  font-weight: 500;
  font-size: 2.5rem;
  text-transform: uppercase;
`;

export const Form = styled.form`
  width: 100%;

  display: grid;
  grid-gap: 2rem;
`;

export const BottomLinksContainer = styled.div``;

export const BottomText = styled.p`
  font-size: 1.5rem;
`;

export const LinkText = styled(Link)`
  text-decoration: none;
  color: var(--color-primary);
`;
