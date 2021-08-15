import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors } from '../../redux/ui/uiActions';
import {
  getUserDetails,
  updateUserDetails,
  clearUserDetailsSuccess,
} from '../../redux/user/userActions';

// Components
import CustomButton from '../../components/customButton/CustomButton.component';
import TextField from '../../components/Inputs/textField/TextField.component';

// Styles
import {
  Container,
  UserDetails,
  UserOrders,
  Title,
  Form,
} from './Profile.styles';
import NormalMessage from '../../components/messages/NormalMessage/NormalMessage.component';

const Profile = () => {
  let history = useHistory();

  const [uiErrors, setUiErrors] = useState({});
  const [userCredentials, setUserCredentials] = useState({
    password: '',
    confirmPassword: '',
  });
  const [name, setName] = useState('');

  const { password, confirmPassword } = userCredentials;

  const dispatch = useDispatch();

  // ----------- CLEAN REDUX STATE -----
  useEffect(() => {
    return () => {
      dispatch(clearErrors());
      dispatch(clearUserDetailsSuccess());
    };
  }, [dispatch]);

  const userDetails = useSelector((state) => state.userDetails);
  const user = useSelector((state) => state.user);
  const UI = useSelector((state) => state.UI);
  const { userInfo } = user;
  const { userData, success } = userDetails;
  const { loading, errors } = UI;

  // -------- UI DATA ---------
  useEffect(() => {
    if (success) {
      setUserCredentials({
        password: '',
        confirmPassword: '',
      });
    }
    if (errors) {
      setUiErrors(errors);
    }
    if (!errors && !loading) {
      setUiErrors({});
    }
  }, [errors, loading, success]);

  // -------- USER DATA ---------
  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
    if (!userData.name) {
      dispatch(getUserDetails('profile'));
    } else {
      setName(userData.name);
    }
  }, [history, userInfo, dispatch, userData]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserDetails(name, password, confirmPassword));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };
  console.log('render');

  return (
    <Container>
      <UserDetails>
        <Title>Perfil</Title>
        <Form>
          <AnimateSharedLayout>
            <AnimatePresence>
              {success && (
                <NormalMessage type='success'>
                  Datos actualizados correctamente
                </NormalMessage>
              )}
            </AnimatePresence>
            <TextField
              name='name'
              type='text'
              handleChange={(e) => setName(e.target.value)}
              value={name}
              label='Nombre'
              error={uiErrors.name}
              required
              layout
            />
            <TextField
              name='password'
              type='password'
              handleChange={handleChange}
              value={password}
              label='Contraseña'
              error={uiErrors.password}
              required
              layout
            />
            <TextField
              name='confirmPassword'
              type='password'
              handleChange={handleChange}
              value={confirmPassword}
              label='Confirmar contraseña'
              error={uiErrors.confirmPassword}
              required
              layout
            />
            <CustomButton type='submit' onClick={SubmitHandler} layout>
              Actualizar perfil
            </CustomButton>
          </AnimateSharedLayout>
        </Form>
      </UserDetails>
      <UserOrders>
        <Title>Mis ordenes</Title>
      </UserOrders>
    </Container>
  );
};

export default Profile;
