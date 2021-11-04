import React from 'react';

import {
  Container,
  InputContainer,
  Input,
  FormInputLabel,
  ErrorText,
} from './textarea-input.styles';

const TextareaInput = ({ handleChange, label, error, ...props }) => {
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

export default TextareaInput;
