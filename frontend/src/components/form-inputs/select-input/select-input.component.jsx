import React from 'react';

// Styles
import { Selector, SelectLabel, Container, Arrow } from './select-input.styles';

const SelectInput = ({ label, value, children, ...otherProps }) => {
  return (
    <Container>
      <Selector className={value.length ? 'active' : ''} {...otherProps}>
        {children}
      </Selector>
      <SelectLabel className={value.length ? 'active' : ''}>
        {label}
      </SelectLabel>
      <Arrow className={value.length ? 'active' : ''} />
    </Container>
  );
};

export default SelectInput;
