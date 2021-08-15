import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

// // Redux
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/user/userActions';
import { clearErrors } from '../../redux/ui/uiActions';

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

  const [uiErrors, setUiErrors] = useState({});
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, [dispatch]);

  const user = useSelector((state) => state.user);
  const UI = useSelector((state) => state.UI);
  const { userInfo } = user;
  const { loading, errors } = UI;
  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
    if (errors) {
      setUiErrors(errors);
    }
    if (!errors && !loading) {
      setUiErrors({});
    }
  }, [history, userInfo, redirect, errors, loading]);

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
      {loading && <Spinner />}
      {uiErrors.general && <Message>{uiErrors.general}</Message>}
      <TextField
        name='email'
        type='text'
        handleChange={handleChange}
        value={email}
        label='Email'
        error={uiErrors.email}
        required
      />
      <TextField
        name='password'
        type='password'
        handleChange={handleChange}
        value={password}
        label='Contraseña'
        error={uiErrors.password}
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
