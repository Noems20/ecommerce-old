import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

// // Redux
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/user/userActions';
import { clearErrors } from '../../redux/ui/uiActions';

// // Components
import FormContainer from '../../components/FormContainer/FormContainer.component';
import TextField from '../../components/Inputs/textField/TextField.component';
import CustomButton from '../../components/customButton/CustomButton.component';
import Spinner from '../../components/spinner/Spinner.component';

// Styles
import { NoAccountText, LinkText } from './Register.styles';

const Register = () => {
  let location = useLocation();
  let history = useHistory();

  const [uiErrors, setUiErrors] = useState({});
  const [userCredentials, setUserCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = userCredentials;

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
    if (errors) {
      setUiErrors(errors);
    }
    if (!errors && !loading) {
      setUiErrors({});
    }
  }, [errors, loading]);

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password, confirmPassword));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <FormContainer title='Crear cuenta'>
      {loading && <Spinner />}
      <TextField
        name='name'
        type='text'
        handleChange={handleChange}
        value={name}
        label='Nombre'
        error={uiErrors.name}
        required
      />
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
      <TextField
        name='confirmPassword'
        type='password'
        handleChange={handleChange}
        value={confirmPassword}
        label='Confirmar contraseña'
        error={uiErrors.confirmPassword}
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
