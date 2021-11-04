import styled from 'styled-components';
import tokens from '../../tokens';
import { RiArrowDownSLine } from 'react-icons/ri';

export const Container = styled.div`
  position: relative;
  max-height: 5rem;
`;

export const SelectLabel = styled.label`
  position: absolute;
  top: -5px;
  left: 8px;
  letter-spacing: 0.5px;
  font-size: 1.1rem;
  font-weight: 300;
  background-color: #fff;
  padding: 0 3px;
  z-index: 1;
`;

export const Selector = styled.select`
  font-family: ${tokens.fontDisplay};
  font-weight: 300;
  width: 100%;
  height: 100%;

  border: 1px solid #a1a6a4;
  border-radius: 2px;
  padding: 0 11px;
  background-color: transparent;

  -webkit-appearance: none;
`;

export const Arrow = styled(RiArrowDownSLine)`
  position: absolute;
  top: 50%;
  right: 12px;
  width: 1.5rem;
  height: 1.5rem;
  transform: translateY(-50%);
  z-index: -1;
`;
