import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// COMPONENTS
import Modal from '../modal/modal.component';
import Message from '../messages/normal-message/normal-message.component';
import TextInput from '../form-inputs/text-input/text-input.component';
import SelectInput from '../form-inputs/select-input/select-input.component';
import CustomButton from '../custom-button/custom-button.component';

// STYLES
import {
  Card,
  CardMenu,
  IconContainer,
  CardHeader,
  State,
  City,
  CardBody,
  TwoColumns,
  InfoContainer,
  InfoTitle,
  Info,
  EditForm,
  TwoColumnsModal,
  FormTitle,
} from './shipping-card.styles';

// ICONS
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const ShippingCard = () => {
  // ---------------------------- STATE AND CONSTANTS ------------------
  const [open, setOpen] = useState(false);
  const [addressData, setAddressData] = useState({
    state: '',
    city: '',
    suburb: '',
    postalCode: '',
    address: '',
    phone: '',
    references: '',
    instructions: '',
  });

  const {
    state,
    city,
    suburb,
    postalCode,
    address,
    phone,
    references,
    instructions,
  } = addressData;

  // ---------------------------------- HANDLERS ---------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;

    setAddressData({ ...addressData, [name]: value });
  };

  return (
    <>
      <Card>
        <CardMenu>
          <IconContainer edit onClick={() => setOpen('edit')}>
            <FaEdit />
          </IconContainer>
          <IconContainer onClick={() => setOpen('delete')}>
            <FaTrashAlt />
          </IconContainer>
        </CardMenu>
        <CardHeader>
          <State>Zacatecas</State>
          <City>Guadalupe</City>
        </CardHeader>
        <CardBody>
          <TwoColumns>
            <InfoContainer>
              <InfoTitle>Colonia</InfoTitle>
              <Info>El salero</Info>
            </InfoContainer>
            <InfoContainer>
              <InfoTitle>Dirección</InfoTitle>
              <Info>Andador laurel 108A</Info>
            </InfoContainer>
            <InfoContainer>
              <InfoTitle>Codigo postal</InfoTitle>
              <Info>98607</Info>
            </InfoContainer>
            <InfoContainer>
              <InfoTitle>Teléfono</InfoTitle>
              <Info>(492) 134 7258</Info>
            </InfoContainer>
          </TwoColumns>
          <InfoContainer>
            <InfoTitle>Referencias</InfoTitle>
            <Info>
              Primer casa del andador laurel, color verde al lado de
              estacionamiento
            </Info>
          </InfoContainer>
          <InfoContainer>
            <InfoTitle>Instrucciones de entrega</InfoTitle>
            <Info>Tocar tres veces y decir la contraseña 1122</Info>
          </InfoContainer>
        </CardBody>
      </Card>

      {/* -------------------------- MODAL ----------------------------- */}
      <AnimatePresence>
        {open === 'edit' && (
          <Modal handleClose={() => setOpen(false)}>
            <EditForm>
              <FormTitle>Editar dirección</FormTitle>
              <TwoColumnsModal>
                <SelectInput
                  label='Estado'
                  name='state'
                  onChange={handleChange}
                  value={state}
                >
                  <option key={0} value=''>
                    Selecciona tu estado
                  </option>
                  <option key={1} value='Zacatecas'>
                    Zacatecas
                  </option>
                </SelectInput>
                <SelectInput
                  label='Ciudad'
                  name='city'
                  onChange={handleChange}
                  value={city}
                >
                  <option key={0} value=''>
                    Selecciona tu ciudad
                  </option>
                  <option key={1} value='Zacatecas'>
                    Zacatecas
                  </option>
                  <option key={2} value='Guadalupe'>
                    Guadalupe
                  </option>
                </SelectInput>
                <TextInput
                  type='text'
                  label='Código postal'
                  name='postalCode'
                  value={postalCode}
                  handleChange={handleChange}
                />
                <TextInput
                  type='text'
                  label='Teléfono'
                  name='phone'
                  value={phone}
                  handleChange={handleChange}
                />
              </TwoColumnsModal>
              <TextInput
                type='text'
                label='Colonia'
                name='suburb'
                value={suburb}
                handleChange={handleChange}
              />
              <TextInput
                type='text'
                label='Dirección'
                name='address'
                value={address}
                handleChange={handleChange}
              />
              <TextInput
                textarea
                type='text'
                label='Referencias'
                name='references'
                value={references}
                handleChange={handleChange}
              />
              <TextInput
                type='text'
                textarea
                label='Instrucciones de entrega'
                name='instructions'
                value={instructions}
                handleChange={handleChange}
              />
              <CustomButton primary>Actualizar dirección</CustomButton>
            </EditForm>
          </Modal>
        )}
        {open === 'delete' && (
          <Modal handleClose={() => setOpen(false)}>
            <Message
              type='error'
              title='Cuidado'
              text='¿Seguro que quieres eliminar esta dirección?'
              button='Continuar'
              handleClose={() => setOpen(false)}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShippingCard;
