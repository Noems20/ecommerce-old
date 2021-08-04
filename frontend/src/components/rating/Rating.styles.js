import styled from 'styled-components';

export const Container = styled.div``;

export const IconContainer = styled.span`
  & svg {
    color: ${(props) => (props.color ? props.color : 'white')};
    margin-right: 0.5rem;
  }
`;
export const Text = styled.p`
  display: inline-block;
  margin-left: 1rem;
`;
