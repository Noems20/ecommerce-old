import styled from 'styled-components';
import tokens from '../../tokens';

const marginRightLeft = '4rem';
const marginTopBottom = '3rem';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;

  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
`;

export const ImageContainer = styled.div`
  grid-column: full-start/ col-end 4;

  margin-left: ${marginRightLeft};
  margin-top: ${marginTopBottom};
  margin-bottom: ${marginTopBottom};
`;

export const ProductImage = styled.img`
  width: 100%;
`;

export const InfoContainer = styled.div`
  margin: ${marginTopBottom} ${marginRightLeft} ${marginTopBottom} 5rem;
  grid-column: col-start 5 / full-end;

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
  width: 100%;
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  grid-gap: 1.5rem;
`;

export const DropDown = styled.div`
  position: relative;
`;

export const Selector = styled.select`
  width: 100%;
  height: 100%;
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
