import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: 1fr;
  align-items: center;
`;

export const Icons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 5px;
`;

export const IconContainer = styled.span`
  & svg {
    color: ${(props) => (props.color ? props.color : 'white')};
    font-size: 2rem;
  }
`;
export const Text = styled.p`
  font-size: 1.6rem;
  display: inline-block;
  color: var(--color-grey-product);
  font-weight: 700;
`;
