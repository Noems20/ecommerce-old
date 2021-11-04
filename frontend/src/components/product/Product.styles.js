import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-rows: max-content 1fr;
  align-content: start;
`;

export const CardHead = styled.div`
  position: relative;

  &:hover,
  &:active {
    button {
      display: inline-block; /* Display inline block */
      position: absolute; /* Position absolute */
      top: 50%; /* position the top  edge of the element at the middle of the parent */
      left: 50%; /* position the left edge of the element at the middle of the parent */

      transform: translate(
        -50%,
        -50%
      ); /* This is a shorthand of translateX(-50%) and translateY(-50%) */

      animation: fadeIn 0.5s;

      -webkit-transition: opacity 600ms, visibility 600ms;
      transition: opacity 600ms, visibility 600ms, color 300ms,
        background-color 300ms;
    }
  }
`;

export const ImageCaption = styled(Link)`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  transition: all 0.3s ease-in-out;

  display: grid;
  align-content: center;
  justify-content: center;

  &:hover,
  &:active {
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
  }
`;

export const AddItem = styled(CustomButton)`
  display: none;
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.7);
  color: #000;
  border: 1px solid #000;

  z-index: 2;

  &:hover {
    background-color: var(--color-primary);
    color: #fff;
    border: 1px solid var(--color-primary);
  }

  &:active {
    background-color: #fff;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
  }

  &:hover + a {
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate(-50%, -100%);
    }

    100% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 0;
      transform: translateY(0);
    }

    100% {
      opacity: 1;
      transform: translateY(-100%);
    }
  }
`;

export const CardImg = styled.img`
  width: 100%;
`;

export const CardBody = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content) 1fr;
  grid-gap: 1rem;
`;

export const CardPrice = styled.h2`
  font-weight: 700;
`;

export const CardTitle = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.6;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--color-primary);
    transition: all 0.2s ease-in-out;
  }
`;
export const CardReview = styled.h2`
  font-weight: 400;
  align-self: end;
`;
