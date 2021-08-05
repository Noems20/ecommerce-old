import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--color-secondary-light);
  height: 40rem;
  padding: 5rem 4rem;

  display: grid;
  grid-template-rows: max-content min-content;
  grid-gap: 4rem;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-gap: 2rem;
`;

export const ItemTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1.5px;
`;

export const IconsContainer = styled.div`
  height: 100%;
  margin-right: 10rem;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);

  & svg {
    font-size: 3.5rem;
    color: var(--color-secondary);
    background-color: #fff;
    border-radius: 100%;
    padding: 5px;
  }
`;

export const List = styled.ul`
  list-style: none;
`;
export const ListItem = styled.li`
  line-height: 1.6;
  font-weight: 400;
  font-size: 1.3rem;
  margin: 1.5rem 0;
`;

export const WebsiteRights = styled.p`
  font-size: 1.2rem;
`;
