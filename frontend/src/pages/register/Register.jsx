import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

// // Redux
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/user/userActions';

// // Components
import FormContainer from '../../components/FormContainer/FormContainer.component';
import TextField from '../../components/Inputs/textField/TextField.component';
import CustomButton from '../../components/customButton/CustomButton.component';
import Spinner from '../../components/spinner/Spinner.component';
import Message from '../../components/messages/NormalMessage/NormalMessage.component';

// Styles
import { NoAccountText, LinkText } from './Register.styles';

const Register = () => {
  let location = useLocation();
  let history = useHistory();

  const [userCredentials, setUserCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState(null);
  const { name, email, password, confirmPassword } = userCredentials;

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

    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden');
    } else {
      setMessage(null);
      dispatch(register(name, email, password));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <FormContainer title='Crear cuenta'>
      {message && <Message>{message}</Message>}
      {error && <Message>{error}</Message>}
      {loading && <Spinner />}
      <TextField
        name='name'
        type='text'
        handleChange={handleChange}
        value={name}
        label='Nombre'
        required
      />
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
      <TextField
        name='confirmPassword'
        type='password'
        handleChange={handleChange}
        value={confirmPassword}
        label='Confirmar contraseña'
        required
      />
      <CustomButton type='submit' onClick={SubmitHandler}>
        Crear cuenta
      </CustomButton>
      <NoAccountText>
        ¿Ya tienes cuenta? Inicia sesión{' '}
        <LinkText to={redirect ? `/login?redirect=${redirect}` : '/login'}>
          aqui
        </LinkText>
      </NoAccountText>
    </FormContainer>
  );
};

export default Register;
