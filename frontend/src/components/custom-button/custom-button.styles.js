import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import Loader from '../loaders/loader.component';
// import tokens from '../../tokens';
// import Loader from '../loaders/loader/loader.component';

// ------------------ PRIMARY BUTTON STYLES ------------
const primaryButtonStyles = css`
  color: #fff;
  background-color: var(--color-primary);
  border: 0.2px solid var(--color-primary);

  &:hover {
    border: 0.2px solid var(--color-primary-dark);
    background-color: var(--color-primary-dark);
  }

  &:disabled {
    background-color: var(--color-primary);
  }
`;

// ------------------ SECONDARY BUTTON STYLES ------------
const secondaryButtonStyles = css`
  border: 0.2px solid var(--color-primary);
  color: var(--color-primary);
  background-color: #fff;

  &:hover {
    background-color: var(--color-primary);
    color: #fff;
  }

  &:disabled {
    background-color: var(--color-primary);
  }
`;
// ------------------ BLACK BUTTON STYLES ------------
const blackButtonStyles = css`
  border: 0.2px solid var(--color-grey-dark-1);
  color: var(--color-grey-dark-1);
  background-color: #fff;

  &:hover {
    background-color: var(--color-grey-dark-1);
    color: #fff;
  }

  &:disabled {
    background-color: var(--color-grey-dark-1);
  }
`;

// ------------------ DANGER BUTTON STYLES ------------
const dangerButtonStyles = css`
  color: #fff;
  background-color: #f94415;
  border: 0.2px solid #f94415;

  &:hover {
    background-color: #e03e14;
    color: #fff;
    border: 0.2px solid #e03e14;
  }

  &:disabled {
    background-color: #f94415;
  }
`;

const getButtonStyles = (props) => {
  if (props.primary) {
    return primaryButtonStyles;
  } else if (props.danger) {
    return dangerButtonStyles;
  } else if (props.black) {
    return blackButtonStyles;
  } else {
    return secondaryButtonStyles;
  }
};

export const CustomButtonContainer = styled(motion.button)`
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  transition-property: color, background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease;

  &:hover {
    transition-property: color, background-color;
    transition-duration: 0.2s;
    transition-timing-function: ease;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${getButtonStyles}
`;

export const ChildrenContainer = styled.div`
  height: 2.4rem;
  display: grid;
  align-content: center;
  justify-content: Center;
`;

export const ButtonLoader = styled(Loader)`
  --size: 4.5rem; // width, height
`;
