import styled from 'styled-components';
import { motion } from 'framer-motion';

const marginRightLeft = '4rem';
const marginTopBottom = '3rem';

export const Container = styled(motion.div)`
  display: grid;
  grid-template-rows: 1fr;

  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
`;

export const UserDetails = styled(motion.div)`
  grid-column: full-start / col-end 2;
  margin-left: ${marginRightLeft};
  margin-top: ${marginTopBottom};
  margin-bottom: ${marginTopBottom};
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
