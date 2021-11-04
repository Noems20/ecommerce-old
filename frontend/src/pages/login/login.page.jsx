import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

// REDUX

// COMPONENTS
import FormContainer from '../../components/form-container/form-container.component';
import TextInput from '../../components/form-inputs/text-input/text-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

// STYLES
import { NoAccountText, LinkText } from './login.page.styles';

const Login = () => {
  let location = useLocation();

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const SubmitHandler = (e) => {
    e.preventDefault();

    // dispatch(login(email, password));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <FormContainer title='Iniciar Sesión'>
      <TextInput
        name='email'
        type='text'
        handleChange={handleChange}
        value={email}
        label='Email'
        // error={uiErrors.email}
        required
      />
      <TextInput
        name='password'
        type='password'
        handleChange={handleChange}
        value={password}
        label='Contraseña'
        // error={uiErrors.password}
        required
      />
      <CustomButton type='submit' onClick={SubmitHandler}>
        Iniciar Sesión
      </CustomButton>
      <NoAccountText>
        ¿No tienes cuenta? Registrate{' '}
        <LinkText
          to={redirect ? `/registro?redirect=${redirect}` : '/registro'}
        >
          aqui
        </LinkText>
      </NoAccountText>
    </FormContainer>
  );
};

export default Login;
