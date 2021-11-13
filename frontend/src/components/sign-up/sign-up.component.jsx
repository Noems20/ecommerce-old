import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { clearSuccess, clearUiErrors } from '../../redux/ui/uiActions';
import { signUp } from '../../redux/user/userActions';

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

const SignUp = () => {
  // ---------------------------- STATE AND CONSTANTS --------------------
  let location = useLocation();

  const [userCredentials, setUserCredentials] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { name, email, password, passwordConfirm } = userCredentials;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);
  const { uiErrors, loading, success } = ui;

  // ----------------------------- USE EFFECT'S ------------------------
  useEffect(() => {
    dispatch(clearUiErrors());
    return () => {
      dispatch({
        type: 'SET_UI_LOADING',
        payload: { firstLoader: false },
      });
      dispatch(clearSuccess());
      dispatch(clearUiErrors());
    };
  }, [dispatch]);

  // ------------------------------- HANDLERS -------------------------

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(signUp(name, email, password, passwordConfirm));
  };

  return (
    <SignCard>
      <Form>
        <Logo src={logo4} />
        <SignTitle>Crear cuenta</SignTitle>
        <TextInput
          name='name'
          type='text'
          handleChange={handleChange}
          value={name}
          label='Nombre'
          error={uiErrors.errorsOne.name}
          required
        />
        <TextInput
          name='email'
          type='text'
          handleChange={handleChange}
          value={email}
          label='Email'
          error={uiErrors.errorsOne.email}
          required
        />
        <TextInput
          name='password'
          type='password'
          handleChange={handleChange}
          value={password}
          label='Contraseña'
          error={uiErrors.errorsOne.password}
          required
        />
        <TextInput
          name='passwordConfirm'
          type='password'
          handleChange={handleChange}
          value={passwordConfirm}
          label='Confirmar contraseña'
          error={uiErrors.errorsOne.passwordConfirm}
          required
        />
        <CustomButton
          primary
          type='submit'
          loading={loading.firstLoader}
          disabled={loading.firstLoader}
          onClick={handleSubmit}
        >
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
      </Form>
    </SignCard>
  );
};

export default SignUp;
