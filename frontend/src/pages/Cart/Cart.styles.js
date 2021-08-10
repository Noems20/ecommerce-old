import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/customButton/CustomButton.component';

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

export const Message = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
`;

export const NoItemsContainer = styled.div`
  margin: 10rem 0;

  display: grid;
  justify-content: center;
  grid-gap: 4rem;
`;

export const CartContainer = styled.div`
  grid-column: ${({ itemsCount }) =>
    itemsCount === 0 ? 'full-start/full-end' : 'full-start/ col-end 6'};
  margin-left: ${marginRightLeft};
  margin-top: ${marginTopBottom};
  margin-bottom: ${marginTopBottom};
  margin-right: ${({ itemsCount }) =>
    itemsCount === 0 ? marginRightLeft : ''};
`;

export const ItemsContainer = styled.div`
  margin-top: 2rem;

  & .Separation {
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #e2e1e1;
  }
`;

export const ItemsContainerTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e2e1e1;
`;

export const Item = styled.div`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(4, 1fr);
`;

export const ItemImage = styled.img`
  width: 100%;
`;
export const ItemDetails = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const ItemName = styled(Link)`
  text-decoration: none;
  font-weight: 300;
  font-size: 1.6rem;
  color: #000;
  line-height: 1.6;
  transition: all 0.2s ease;

  &:hover {
    color: var(--color-primary);
    transition: all 0.2s ease;
  }
`;

export const ItemRemove = styled.button`
  color: var(--color-primary);
  font-size: 1.3rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: inline;

  align-self: end;
  justify-self: start;
`;

export const ItemTotalPrice = styled.h2`
  font-weight: 300;
  letter-spacing: 0.5px;
  justify-self: end;
`;

export const OrderSummary = styled.div`
  grid-column: col-start 7 / full-end;
  align-self: start;
  border: 1px solid #e2e1e1;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
  margin: ${marginTopBottom} ${marginRightLeft} ${marginTopBottom} 5rem;
  padding: 2rem 2.2rem;
`;

export const OrderSummaryTitle = styled.h1`
  text-align: center;
  font-weight: 300;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e2e1e1;
`;

export const OrderLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  margin-bottom: 2rem;
`;
export const RightText = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
`;
export const LeftText = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  justify-self: end;
`;

export const Button = styled(CustomButton)`
  width: 100%;
`;
