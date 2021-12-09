import styled from 'styled-components';
import { motion } from 'framer-motion';
import Pagination from '../../pagination/pagination.component';

export const Container = styled(motion.div)`
  grid-column: full-start / full-end;
  margin: 4rem;
  display: grid;
  grid-gap: 2rem;
  /* justify-items: center; */

  @media only screen and (max-width: 440px) {
    margin: 4rem 0;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(46rem, 1fr));
  grid-gap: 2rem;

  @media only screen and (max-width: 720px) {
    grid-gap: 3.5rem;
  }

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }
`;

export const PaginationModified = styled(Pagination)`
  justify-self: center;
`;
