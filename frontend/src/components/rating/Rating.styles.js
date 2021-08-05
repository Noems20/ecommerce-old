import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: 1fr;
  align-items: center;
`;

export const Icons = styled.div``;

export const IconContainer = styled.span`
  & svg {
    color: ${(props) => (props.color ? props.color : 'white')};
    margin-right: 0.5rem;
    font-size: 2rem;
  }
`;
export const Text = styled.p`
  font-size: 1.6rem;
  display: inline-block;
  margin-left: 1rem;
`;
