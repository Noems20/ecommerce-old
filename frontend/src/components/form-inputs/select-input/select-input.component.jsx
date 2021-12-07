import React from 'react';

// Styles
import { Selector, SelectLabel, Container, Arrow } from './select-input.styles';

const SelectInput = ({ label, error, value, children, ...otherProps }) => {
  return (
    <Container>
      <Selector
        className={value.length ? 'active' : ''}
        {...otherProps}
        error={error ? true : false}
      >
        {children}
      </Selector>
      <SelectLabel
        className={value.length ? 'active' : ''}
        error={error ? true : false}
      >
        {label}
      </SelectLabel>
      <Arrow
        className={value.length ? 'active' : ''}
        error={error ? true : false}
      />
    </Container>
  );
};

export default SelectInput;
