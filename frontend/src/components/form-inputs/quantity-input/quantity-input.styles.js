import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2rem;
  justify-content: start;
`;

export const Input = styled.input`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-grey-product);
  border: none;
  outline: none;
  width: 3.5rem;

  text-align: center;
`;

export const Operator = styled.button`
  font-size: 3rem;
  font-weight: 700;
  opacity: 0.5;
  color: var(--color-grey-product);
  border: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;

  &:hover {
    opacity: 1;
  }
`;
