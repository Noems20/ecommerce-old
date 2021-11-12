import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

// REDUX

// COMPONENTS
import FormContainer from '../../components/form-container/form-container.component';
import TextInput from '../../components/form-inputs/text-input/text-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

// STYLES
import { Container } from './register.page.styles';

import {
  BottomLinksContainer,
  BottomText,
  LinkText,
} from '../../components/form-container/form-container.styles';

const Register = () => {
  let location = useLocation();

  const [userCredentials, setUserCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = userCredentials;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Container>
      <FormContainer title='Crear cuenta'>
        <TextInput
          name='name'
          type='text'
          handleChange={handleChange}
          value={name}
          label='Nombre'
          // error='{uiErrors.name}'
          required
        />
        <TextInput
          name='email'
          type='text'
          handleChange={handleChange}
          value={email}
          label='Email'
          // error='{uiErrors.email}'
          required
        />
        <TextInput
          name='password'
          type='password'
          handleChange={handleChange}
          value={password}
          label='Contraseña'
          // error='{uiErrors.password}'
          required
        />
        <TextInput
          name='confirmPassword'
          type='password'
          handleChange={handleChange}
          value={confirmPassword}
          label='Confirmar contraseña'
          // error='{uiErrors.confirmPassword}'
          required
        />
        <CustomButton primary type='submit' onClick={SubmitHandler}>
          Crear cuenta
        </CustomButton>
        <BottomLinksContainer>
          <BottomText>
            ¿Ya tienes cuenta? Inicia sesión{' '}
            <LinkText to={redirect ? `/login?redirect=${redirect}` : '/login'}>
              aqui
            </LinkText>
          </BottomText>
        </BottomLinksContainer>
      </FormContainer>
    </Container>
  );
};

export default Register;
