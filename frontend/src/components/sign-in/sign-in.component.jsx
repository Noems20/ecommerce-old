import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/user/userActions';
import { clearUiErrors } from '../../redux/ui/uiActions';

// COMPONENTS
import TextInput from '../../components/form-inputs/text-input/text-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

// STYLES
import {
  SignCard,
  Logo,
  SignTitle,
  Form,
  BottomLinksContainer,
  BottomText,
  LinkText,
} from '../../general.styles';

// LOGOS
// import logo from './logo.svg';
// import logo2 from './logo2.png';
// import logo3 from './logo3.svg';
import logo4 from '../form-container/logo4.svg';
// import logo5 from './logo5.svg';

const SignIn = ({ setTab, variants }) => {
  // ---------------------------- STATE AND CONSTANTS --------------------
  let location = useLocation();
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;
  const redirect = location.search ? location.search.split('=')[1] : '/';
  const dispatch = useDispatch();
  const { uiErrors, loading } = useSelector((state) => state.ui);
  const { errorsOne } = uiErrors;

  // ----------------------------- USE EFFECT'S ------------------------

  useEffect(() => {
    dispatch(clearUiErrors());
    return () => {
      dispatch({
        type: 'SET_UI_LOADING',
        payload: { firstLoader: false },
      });
      dispatch(clearUiErrors());
    };
  }, [dispatch]);

  // ------------------------------- HANDLERS -------------------------

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(login(email, password));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <SignCard
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <Form>
        <Logo src={logo4} />
        <SignTitle>Iniciar sesión</SignTitle>
        <TextInput
          name='email'
          type='text'
          handleChange={handleChange}
          value={email}
          label='Email'
          error={errorsOne.email}
          required
        />
        <TextInput
          name='password'
          type='password'
          handleChange={handleChange}
          value={password}
          label='Contraseña'
          error={errorsOne.password}
          required
        />
        <CustomButton
          primary
          loading={loading.firstLoader}
          disabled={loading.firstLoader}
          type='submit'
          onClick={handleSubmit}
        >
          Iniciar Sesión
        </CustomButton>
        <BottomLinksContainer>
          <BottomText>
            ¿No tienes cuenta? Registrate{' '}
            <LinkText
              to={redirect ? `/registro?redirect=${redirect}` : '/registro'}
            >
              aqui
            </LinkText>
          </BottomText>
          <BottomText>
            ¿Olvidaste tu contraseña? da click{' '}
            <LinkText as='span' onClick={() => setTab('forgotPassword')}>
              aqui
            </LinkText>
          </BottomText>
        </BottomLinksContainer>
      </Form>
    </SignCard>
  );
};

export default SignIn;
