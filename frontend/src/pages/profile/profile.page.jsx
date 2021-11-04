import React, { useState } from 'react';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

// REDUX

// COMPONENTS
import CustomButton from '../../components/custom-button/custom-button.component';
import TextInput from '../../components/form-inputs/text-input/text-input.component';

// STYLES
import {
  Container,
  UserDetails,
  UserOrders,
  Title,
  Form,
} from './profile.page.styles';

const Profile = () => {
  const [userCredentials, setUserCredentials] = useState({
    password: '',
    confirmPassword: '',
  });
  const [name, setName] = useState('');

  const { password, confirmPassword } = userCredentials;

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Container>
      <UserDetails>
        <Title>Perfil</Title>
        <Form>
          <AnimateSharedLayout>
            <AnimatePresence></AnimatePresence>
            <TextInput
              name='name'
              type='text'
              handleChange={(e) => setName(e.target.value)}
              value={name}
              label='Nombre'
              // error={uiErrors.name}
              required
              layout
            />
            <TextInput
              name='password'
              type='password'
              handleChange={handleChange}
              value={password}
              label='Contraseña'
              // error={uiErrors.password}
              required
              layout
            />
            <TextInput
              name='confirmPassword'
              type='password'
              handleChange={handleChange}
              value={confirmPassword}
              label='Confirmar contraseña'
              // error={uiErrors.confirmPassword}
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
