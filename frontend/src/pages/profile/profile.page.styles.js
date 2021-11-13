import styled from 'styled-components';
import { motion } from 'framer-motion';

const marginRightLeft = '4rem';
const marginTopBottom = '3rem';

export const UserDetails = styled(motion.div)`
  grid-column: full-start / col-end 2;
  margin-left: ${marginRightLeft};
  margin-top: ${marginTopBottom};
  margin-bottom: ${marginTopBottom};
  height: 100vh;
`;

export const UserOrders = styled(motion.div)`
  grid-column: col-start 3 / full-end;
  margin: ${marginTopBottom} ${marginRightLeft} ${marginTopBottom} 5rem;
`;

export const Title = styled(motion.h1)`
  text-transform: uppercase;
  font-weight: 300;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e2e1e1;
`;

export const Form = styled(motion.form)`
  width: 100%;

  display: grid;
  grid-gap: 2rem;
`;
