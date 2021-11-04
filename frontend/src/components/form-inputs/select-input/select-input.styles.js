import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  top: 4.5rem;
  right: 0;
  background-color: #fff;
  border-radius: var(--border-radius);
  border: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;

  padding: 1rem;
  overflow: hidden;
`;

export const Text = styled.p`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: inherit;
  font-size: 1.4rem;
  font-weight: 300;
  cursor: pointer;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
`;
