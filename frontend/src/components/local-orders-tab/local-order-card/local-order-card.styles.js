import styled from 'styled-components';

export const CardContent = styled.div`
  margin: 2rem;
  display: grid;
  grid-gap: 2rem;
`;

export const CardTitle = styled.h1`
  color: var(--color-primary);
`;

export const TwoColumns = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-radius: 8px;
  border-collapse: collapse;
  overflow: hidden;
  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
export const TableRow = styled.tr``;

export const TableHeading = styled.th`
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  padding: 0 1rem;
  border: 1px solid #ddd;
  background-color: var(--color-primary);
`;

export const TableData = styled.td`
  text-align: center;
  font-size: 1.6rem;
  padding: 0.5rem;
  border: 1px solid #ddd;

  @media only screen and (max-width: 380px) {
    padding: 0.5rem 0;
    width: min-content;
  }
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-gap: 0.5rem;
`;

export const CardSubtitle = styled.h2`
  font-size: 1.7rem;
`;

export const CardText = styled.p`
  font-size: 1.6rem;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 400px) {
    grid-template-columns: none;
  }
`;
