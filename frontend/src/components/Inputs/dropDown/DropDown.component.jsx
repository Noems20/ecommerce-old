import React from 'react';

// Styles
import { Selector, SelectLabel, Container, Arrow } from './DropDown.styles';

const DropDown = ({ label, children, ...otherProps }) => {
  return (
    <Container>
      <SelectLabel>{label}</SelectLabel>
      <Selector {...otherProps}>{children}</Selector>
      <Arrow />
    </Container>
  );
};

export default DropDown;
