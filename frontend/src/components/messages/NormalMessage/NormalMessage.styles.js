import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const errorBackgroundColor = '#f9dbd6';
const successBackgroundColor = '#d7f9d6';

const errorColor = 'var(--color-primary-dark)';
const successColor = '#1c9452';

const ErrorBackgroundColor = css`
  background-color: ${errorBackgroundColor};
`;
const SuccessBackgroundColor = css`
  background-color: ${successBackgroundColor};
`;
const ErrorColor = css`
  color: ${errorColor};
`;
const SuccessColor = css`
  color: ${successColor};
`;

const getBackgroundColor = (props) => {
  switch (props.type) {
    case 'error':
      return ErrorBackgroundColor;
    case 'success':
      return SuccessBackgroundColor;
    default:
      return ErrorBackgroundColor;
  }
};

const getColor = (props) => {
  switch (props.type) {
    case 'error':
      return ErrorColor;
    case 'success':
      return SuccessColor;
    default:
      return ErrorColor;
  }
};

export const Container = styled(motion.div)`
  padding: 1.5rem 1.5rem;
  ${getBackgroundColor}
`;

export const Text = styled(motion.h3)`
  text-align: center;
  line-height: 1.6;
  ${getColor}
`;
