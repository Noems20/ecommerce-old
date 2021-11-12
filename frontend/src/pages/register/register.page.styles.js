import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
`;

export const NoAccountText = styled.p`
  font-size: 1.2rem;
`;

export const LinkText = styled(Link)`
  text-decoration: none;
  color: var(--color-primary);
  font-size: 1.2rem;
`;
