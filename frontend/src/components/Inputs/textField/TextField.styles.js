import styled, { css } from 'styled-components';

const shrinkLabelStyles = css`
  top: -0.1rem;
  left: 12px;
  background-color: white;
  padding: 0 0.5rem;
`;

export const Container = styled.div`
  position: relative;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const Input = styled.input`
  font-size: 1.5rem;
  font-weight: 300;
  background-color: white;
  padding: 1.5rem 1.7rem;
  border: 1px solid #a1a6a4;
  border-radius: 2px;

  display: block;
  width: 100%;
  &:focus {
    outline: none;
  }

  &:focus-within ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  position: absolute;
  font-size: 1.2rem;
  font-weight: 300;
  top: 50%;
  left: 12px;
  padding: 0 0.5rem;

  pointer-events: none;
  transition: 300ms ease all;
  transform: translateY(-50%);

  &.shrink {
    ${shrinkLabelStyles}
  }
`;
