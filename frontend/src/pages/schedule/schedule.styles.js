import styled from 'styled-components';
import { HeroSection } from '../../hero.styles';

// --------------------------------------------------------
// HERO
// --------------------------------------------------------

export const Hero = styled(HeroSection)`
  height: calc(70vh - 12rem);
  @media only screen and (max-width: 1300px) {
    background: rgb(255, 244, 236);
    background: linear-gradient(
      180deg,
      rgba(255, 244, 236, 1) 0%,
      rgba(252, 236, 220, 1) 25%,
      rgba(248, 220, 218, 1) 75%,
      rgba(246, 214, 220, 1) 100%
    );
    height: auto;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    padding: 4rem 0;
  }

  @media only screen and (max-width: 600px) {
    margin: 0;
    margin-bottom: 2rem;
    border-radius: 0;
  }
`;

export const HeroImageModified = styled.img`
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -28%);

  @media only screen and (min-width: 1850px) {
    width: 45%;
  }

  @media only screen and (max-width: 1300px) {
    transform: translate(-50%, -20%);
  }

  @media only screen and (max-width: 900px) {
    transform: translate(-50%, -25%);
    width: 370px;
  }

  @media only screen and (max-width: 500px) {
    width: 300px;
    transform: translate(-50%, -32%);
  }

  @media only screen and (max-width: 360px) {
    width: 280px;
  }
`;

// --------------------------------------------------------
// PRODUCTS GRID
// --------------------------------------------------------

export const Products = styled.div`
  grid-column: full-start / full-end;
  margin: 2rem 3rem;

  display: grid;
  grid-gap: 5rem;
  grid-template-columns: max-content 1fr;

  @media only screen and (max-width: 1300px) {
    grid-template-rows: max-content max-content;
    grid-template-columns: 1fr;
  }
`;

export const FilterTitle = styled.h1`
  font-size: 1.6rem;
  color: var(--color-grey-product);
  font-weight: 700;

  text-transform: uppercase;
`;

// ------------------------------------
// FILTERS
// ------------------------------------

export const FiltersContainer = styled.div`
  padding: 2rem 3rem;
  height: max-content;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 5px;
  background-color: #fff;

  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 10rem;

  display: grid;
  grid-gap: 2rem;

  @media only screen and (max-width: 1300px) {
    position: static;
    grid-gap: 5rem;
    grid-template-rows: max-content;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 650px) {
    grid-gap: 2rem;
    grid-template-rows: max-content;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const Filter = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export const FilterItem = styled.div`
  font-size: 1.6rem;
  color: var(--color-grey-product);
  cursor: pointer;
  width: max-content;

  display: flex;
  align-items: center;

  &:hover {
    color: var(--color-primary);
  }
`;

export const RadioButton = styled.div`
  height: 17px;
  width: 17px;
  margin-right: 1rem;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  background-color: #fff;

  &.selected {
    background-color: var(--color-primary);
  }
`;

// ------------------------------------
// PRODUCTS GRID
// ------------------------------------

export const ProductsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  grid-gap: 2rem;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  }
`;
