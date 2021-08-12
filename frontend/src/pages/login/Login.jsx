import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

// // Redux
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/user/userActions';

// // Components
import FormContainer from '../../components/FormContainer/FormContainer.component';
import TextField from '../../components/Inputs/textField/TextField.component';
import CustomButton from '../../components/customButton/CustomButton.component';
import Spinner from '../../components/spinner/Spinner.component';
import Message from '../../components/messages/NormalMessage/NormalMessage.component';

// Styles
import { NoAccountText, LinkText } from './Login.styles';

const Login = () => {
  let location = useLocation();
  let history = useHistory();

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <FormContainer title='Iniciar Sesión'>
      {error && <Message>{error}</Message>}
      {loading && <Spinner />}
      <TextField
        name='email'
        type='text'
        handleChange={handleChange}
        value={email}
        label='Email'
        required
      />
      <TextField
        name='password'
        type='password'
        handleChange={handleChange}
        value={password}
        label='Contraseña'
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
