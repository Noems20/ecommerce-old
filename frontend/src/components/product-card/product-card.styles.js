import styled from 'styled-components';
import Loader from '../loaders/loader.component';

export const Container = styled.div``;

export const ImageBox = styled.div`
  position: absolute;
  top: 0;
  height: 71%;
  width: 100%;
  z-index: 2;
  /* background: red; */
  transition: all 1s ease;
  position: relative;

  display: grid;
  grid-template-rows: 100%;
  justify-content: center;
  align-items: center;
`;

export const ImageLoader = styled(Loader)`
  --clr1: var(--color-primary-dark);
  --clr2: var(--color-primary-dark);
  --clr3: var(--color-primary-dark);
  --clr4: var(--color-primary-dark);
  --clr5: var(--color-primary-dark);
`;

export const ContentBox = styled.div`
  position: absolute;
  left: 50%;
  bottom: 2rem;
  transform: translate(-50%, 30%);

  width: 100%;
  padding: 0 2rem;

  display: grid;
  grid-gap: 0.5rem;
  justify-content: center;
  justify-items: center;
  z-index: 2;

  transition: transform 1s ease;
`;

export const Button = styled.button`
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1rem 2rem;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #000;
  color: #000;
  cursor: pointer;
  /* margin-top: 0.5rem; */

  opacity: 0;
  transform: translateY(60px);
  transition: 0.5s;
`;

export const Card = styled.div`
  position: relative;
  padding: 2rem;
  width: 100%;
  height: 45rem;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  /* display: grid;
  grid-gap: 1rem;
  grid-template-rows: minmax(0, 1fr) max-content; */

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: var(--color-primary);

    background: rgb(0, 83, 162);
    background: linear-gradient(
      90deg,
      rgba(0, 83, 162, 1) 0%,
      rgba(27, 116, 198, 1) 59%,
      rgba(80, 171, 255, 1) 100%
    );
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
    z-index: 2;
  }

  &:hover:before {
    clip-path: circle(300px at 80% -20%);
  }

  &:after {
    content: '${(props) => props.catalog}';
    text-transform: capitalize;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 19rem;
    font-weight: 800;
    font-style: italic;
    color: rgba(0, 0, 0, 0.05);
  }

  &:hover ${ImageBox} {
    height: 59%;
    transition: all 1s ease;
  }

  &:hover ${ContentBox} {
    transform: translate(-50%, 0);
    transition: transform 1s ease;
  }

  &:hover ${Button} {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.75s;
  }

  @media only screen and (max-width: 1100px) {
    height: 48rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  transition: all 1s ease;
`;

export const Title = styled.h1`
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
`;

export const Price = styled.h1`
  font-weight: 400;
  text-align: center;
`;
