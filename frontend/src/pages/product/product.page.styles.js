import styled from 'styled-components';
import tokens from '../../tokens';
import { motion } from 'framer-motion';

export const ProductContainer = styled.div`
  grid-column: full-start/ full-end;
  margin: 3rem 4rem;

  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content 1fr;
`;

export const ImageContainer = styled.div`
  padding: 3rem;
  border: 1px solid black;
  border-radius: 10px;

  display: flex;
  align-items: center;
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

export const ProductTitle = styled.h1`
  font-family: ${tokens.fontPrimary};
  font-size: 2.5rem;
  font-weight: 500;
  margin-top: 1rem;
`;
export const ProductPrice = styled.h1``;

export const AddToCart = styled.div`
  height: 120%;
  width: 100%;
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-gap: 1.5rem;
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
  border-bottom: 1px solid #e2e1e1;
`;
export const Description = styled.div``;

export const DescriptionText = styled.p`
  margin-top: 2rem;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.6;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 2rem;
`;

export const ListItem = styled.li`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.6;
  margin: 1rem 0;
`;
