import React from 'react';

import {
  Container,
  InputContainer,
  Input,
  FormInputLabel,
  ErrorText,
} from './TextField.styles';

const TextField = ({ handleChange, label, error, ...props }) => {
  return (
    <Container>
      <InputContainer>
        <Input
          onChange={handleChange}
          error={error ? true : false}
          {...props}
        />
        {label ? (
          <FormInputLabel className={props.value.length ? 'shrink' : ''}>
            {label}
          </FormInputLabel>
        ) : null}
      </InputContainer>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default TextField;
