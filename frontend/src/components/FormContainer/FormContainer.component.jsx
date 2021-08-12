import React from 'react';
// import { Link } from 'react-router-dom';
import logo from './logo.svg';

// Styles
import {
  Container,
  Content,
  Logo,
  FormTitle,
  Form,
} from './FormContainer.styles';

const FormContainer = ({ children, title }) => {
  return (
    <Container>
      <Content>
        <Logo src={logo} />
        <FormTitle>{title}</FormTitle>
        <Form>{children}</Form>
      </Content>
    </Container>
  );
};

export default FormContainer;
