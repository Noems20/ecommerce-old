import React from 'react';

import { Container, Input, FormInputLabel } from './TextField.styles';

const TextField = ({ handleChange, label, ...props }) => {
  return (
    <Container>
      <Input onChange={handleChange} {...props} />
      {label ? (
        <FormInputLabel className={props.value.length ? 'shrink' : ''}>
          {label}
        </FormInputLabel>
      ) : null}
    </Container>
  );
};

export default TextField;
