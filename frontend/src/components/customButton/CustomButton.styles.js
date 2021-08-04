import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--color-primary);
  letter-spacing: 1px;
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  padding: 1rem 3rem;
  transition: all 0.2s ease;

  border: 1px solid var(--color-primary);

  &:hover {
    background-color: #fff;
    color: var(--color-primary);
    transition: all 0.2s ease;
  }
`;
