import React from 'react';
// import logo from './logo.svg';
// import logo2 from './logo2.png';
// import logo3 from './logo3.svg';
import logo4 from './logo4.svg';
// import logo5 from './logo5.svg';

// Styles
import {
  Container,
  Content,
  Logo,
  FormTitle,
  Form,
} from './form-container.styles';

const FormContainer = ({ children, title }) => {
  return (
    <Container>
      <Content>
        <Logo src={logo4} />
        <FormTitle>{title}</FormTitle>
        <Form>{children}</Form>
      </Content>
    </Container>
  );
};

export default FormContainer;
