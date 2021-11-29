import styled from 'styled-components';
import { HeroSection } from '../../hero.styles';

// --------------------------------------------------------
// HERO
// --------------------------------------------------------

export const Hero = styled(HeroSection)`
  height: calc(70vh - 12rem);
  /* background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  ); */
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  @media only screen and (max-width: 1300px) {
    height: auto;
    grid-gap: 5rem;
    background: linear-gradient(
      180deg,
      rgba(69, 104, 220, 1) 0%,
      rgba(176, 106, 179, 1) 100%
    );
  }
`;
