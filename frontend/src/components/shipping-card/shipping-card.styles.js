import styled from 'styled-components';
import background from './cardBackground.jpg';

export const Card = styled.div`
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 0px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 0px 3px -1px;

  position: relative;

  display: grid;
  grid-template-rows: max-content max-content;

  @media only screen and (max-width: 400px) {
    border-radius: 0px;
  }
`;

export const CardMenu = styled.div`
  position: absolute;
  top: 0;
  right: 3%;

  transform: translateY(-50%);

  display: flex;
`;

export const IconContainer = styled.div`
  background-color: ${({ edit }) =>
    edit === true ? '#196de3' : 'var(--color-red)'};
  border-radius: 100px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 0px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 0px 3px -1px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  & svg {
    font-size: 1.8rem;
    color: #fff;
  }
`;

export const CardHeader = styled.div`
  color: #fff;
  padding: 2rem 0;
  border-radius: 8px 8px 0 0;
  background-image: linear-gradient(
      90deg,
      rgba(0, 83, 162, 0.8) 0%,
      rgba(0, 83, 162, 0.8) 50%,
      rgba(0, 83, 162, 0.8) 100%
    ),
    url(${background});
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const State = styled.h1`
  font-size: 2.7rem;
`;
export const City = styled.h1`
  font-weight: 300;
`;

export const CardBody = styled.div`
  padding: 2rem;

  display: grid;
  grid-gap: 2rem;
`;

export const TwoColumns = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
`;

export const InfoContainer = styled.div``;

export const InfoTitle = styled.h2`
  font-size: 1.8rem;
`;

export const Info = styled.p`
  font-size: 1.7rem;
`;

// export const Suburb = styled.div``;
