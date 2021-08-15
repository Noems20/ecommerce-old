import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const shrinkLabelStyles = css`
  top: -0.1rem;
  left: 12px;
  background-color: white;
  padding: 0 0.5rem;
`;

export const Container = styled(motion.div)`
  display: grid;
  grid-gap: 1rem;
`;

export const InputContainer = styled(motion.div)`
  position: relative;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const Input = styled(motion.input)`
  font-size: 1.5rem;
  font-weight: 300;
  background-color: white;
  padding: 1.5rem 1.7rem;
  border: ${({ error }) =>
    error ? '1px solid var(--color-primary)' : '1px solid #a1a6a4'};
  border-radius: 2px;
  /* box-shadow: ${({ error }) =>
    error ? 'var(--color-primary) 0px 1px 4px' : 'none'}; */

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

export const ErrorText = styled.p`
  color: var(--color-primary);
  font-size: 1.2rem;
`;
