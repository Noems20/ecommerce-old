import React from 'react';

import {
  Container,
  InputContainer,
  Input,
  TextAreaInput,
  FormInputLabel,
  ErrorText,
} from './text-input.styles';

const TextInput = ({ handleChange, label, error, textArea, ...props }) => {
  return (
    <Container>
      <InputContainer>
        {textArea ? (
          <TextAreaInput
            onChange={handleChange}
            error={error ? true : false}
            {...props}
          />
        ) : (
          <Input
            onChange={handleChange}
            error={error ? true : false}
            {...props}
          />
        )}

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

export default TextInput;
