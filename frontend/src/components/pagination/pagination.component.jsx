import React from 'react';

// STYLES
import { Container, Button } from './pagination.styles';

// ICONS
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const Pagination = ({ page = 1, setPage, numOfPages, className }) => {
  return (
    <Container className={className}>
      <Button
        style={{ visibility: page > 1 ? 'visible' : 'hidden' }}
        onClick={() => page > 1 && setPage(page - 1)}
      >
        <FaAngleLeft />
      </Button>

      <Button>{page}</Button>
      <Button
        style={{ visibility: page < numOfPages ? 'visible' : 'hidden' }}
        onClick={() => page < numOfPages && setPage(page + 1)}
      >
        <FaAngleRight />
      </Button>
    </Container>
  );
};

export default Pagination;
