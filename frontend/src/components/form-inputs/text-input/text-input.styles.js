import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import tokens from '../../../tokens';

const errorColor = 'var(--color-red)';
// const subColor = 'var(--color-grey-dark-1)';
const subColor = '#a1a6a4';

const shrinkLabelStyles = css`
  color: ${({ error }) =>
    error ? `${errorColor}` : 'var(--color-primary-light)'};
  top: -0.1rem;
  background-color: white;
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
  color: var(--color-grey-dark-1);
  font-family: ${tokens.fontDisplay};
  font-size: 1.6rem;
  font-weight: 400;
  background-color: white;
  padding: 1.5rem 1.7rem;
  border: ${({ error }) =>
    error ? `2px solid ${errorColor}` : `2px solid ${subColor}`};
  border-radius: 2px;

  -webkit-text-fill-color: var(--color-grey-dark-1);

  display: block;
  width: 100%;
  &:focus {
    outline: none;
  }

  &:focus-within {
    border: ${({ error }) =>
      error
        ? `2px solid ${errorColor}`
        : '2px solid var(--color-primary-light)'};
  }

  &:focus-within ~ label {
    ${shrinkLabelStyles}
  }

  &.active {
    border: ${({ error }) =>
      error
        ? `2px solid ${errorColor}`
        : '2px solid var(--color-primary-light)'};
  }

  @media only screen and (max-width: 1100px) {
    font-size: 1.7rem;
  }
`;

export const TextAreaInput = styled(motion.textarea)`
  resize: vertical;
  font-family: ${tokens.fontDisplay};
  font-size: 1.6rem;
  font-weight: 400;
  background-color: white;
  padding: 1.5rem 1.7rem;
  border: ${({ error }) =>
    error ? '1px solid var(--color-primary)' : `1px solid ${subColor}`};
  border-radius: 2px;

  -webkit-text-fill-color: ${subColor};

  display: block;
  width: 100%;
  &:focus {
    outline: none;
  }

  &:focus-within ~ label {
    ${shrinkLabelStyles}
  }

  @media only screen and (max-width: 1100px) {
    font-size: 1.7rem;
  }
`;

export const FormInputLabel = styled.label`
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ error }) => (error ? `${errorColor}` : `${subColor}`)};
  background-color: #fff;
  position: absolute;
  top: 50%;
  padding: 0 0.7rem;
  margin-left: 1.2rem;

  pointer-events: none;
  transform: translateY(-50%);
  transition: 300ms ease all;
  transition: top 0.3s ease;

  &.shrink {
    ${shrinkLabelStyles}
  }

  @media only screen and (max-width: 1100px) {
    font-size: 1.7rem;
  }
`;

export const ErrorText = styled.p`
  color: ${errorColor};
  font-size: 1.4rem;

  @media only screen and (max-width: 1100px) {
    font-size: 1.7rem;
  }
`;
