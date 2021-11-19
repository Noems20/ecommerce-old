import styled from 'styled-components';
import tokens from '../../tokens';
import { motion } from 'framer-motion';

// ------------------------------------------------------------
// PRODUCT INFO GRID
// ------------------------------------------------------------

export const ProductContainer = styled.div`
  grid-column: full-start/ full-end;
  margin: 3rem 4rem;
  margin-top: 5rem;

  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content 1fr;
`;

// ------------------------------------------------------------
// PRODUCT INFO ITEMS
// ------------------------------------------------------------

export const ImageContainer = styled.div`
  padding: 3rem;
  border: 2px solid var(--color-grey-product);
  border-radius: 10px;

  display: flex;
  justify-content: center;
`;

export const ExpandedProductImage = styled(motion.img)`
  transition: all 0.2s ease;
  cursor: pointer;

  width: 56%;
`;

export const SecondaryImagesContainer = styled.div`
  grid-row: 2 / 3;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));

  & .active {
    /* transform: scale(1.1); */
    /* box-shadow: 0 0 5px #5e5e5e; */
    border: 2px solid var(--color-primary);
    padding: 1px;
    transition: all 0.2s ease;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

export const InfoContainer = styled.div`
  grid-row: 1 / 3;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
  align-content: start;
`;

// ------------------------------------------------------------
// PRODUCT INFO ITEMS
// ------------------------------------------------------------

export const ProductTitle = styled.h1`
  font-family: ${tokens.fontDisplay};
  font-size: 3rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-grey-product);
`;

export const ProductPrice = styled.div`
  font-size: 3rem;
  color: var(--color-grey-product);
  font-weight: 700;

  display: grid;

  & span {
    font-size: 1.6rem;
  }
`;

// ------------------------------------------------------------
// PRODUCT INFO DETAILS
// ------------------------------------------------------------

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
`;

export const DetailsTitle = styled.h2`
  font-size: 1.7rem;
  color: var(--color-grey-product);
  font-weight: 700;

  text-transform: uppercase;
`;

export const DetailsItemsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 1rem;
`;

export const ColorDot = styled.span`
  height: 4rem;
  width: 4rem;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 5px;
  cursor: pointer;

  position: relative;

  &::after {
    content: '';
    display: inline-block;

    position: absolute;
    top: 50%; /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */

    transform: translate(
      -50%,
      -50%
    ); /* This is a shorthand of translateX(-50%) and translateY(-50%) */

    height: 4rem;
    width: 4rem;
    background-color: ${({ color }) => color};
    border-radius: 50%;
    border: 2px solid #fff;
    cursor: pointer;
  }

  &:hover,
  &.selected {
    &::before {
      content: '';
      display: inline-block;

      position: absolute;
      top: 50%; /* position the top  edge of the element at the middle of the parent */
      left: 50%; /* position the left edge of the element at the middle of the parent */

      transform: translate(
        -50%,
        -50%
      ); /* This is a shorthand of translateX(-50%) and translateY(-50%) */

      height: 4.4rem;
      width: 4.4rem;
      background-color: var(--color-primary-light);
      border-radius: 50%;
    }
  }
`;

export const SizeItem = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-grey-product);
  padding: 1rem 3rem;
  border: 2px solid var(--color-primary-light);
  transition: all 0.2s ease;
  cursor: pointer;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  &:hover,
  &.selected {
    background-color: var(--color-primary-light);
    color: #fff;
    transition: all 0.2s ease;
  }
`;

export const NoExistenceText = styled.h1`
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  font-weight: 400;
  color: #fff;
  background-color: var(--color-grey-dark-3);
  border: 1px solid var(--color-grey-dark-3);
  padding: 1rem 0.5rem;
`;

export const InfoTitle = styled.h2`
  letter-spacing: 1px;
  font-family: ${tokens.fontPrimary};
  font-size: 1.7rem;
  font-weight: 700;
  text-transform: uppercase;

  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e2e1e1;
`;
export const Description = styled.div``;

export const DescriptionText = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.6;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.6;
  margin: 1rem 0;
`;
