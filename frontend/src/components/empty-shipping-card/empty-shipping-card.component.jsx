import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// COMPONENTS
import Modal from '../modal/modal.component';
import TextInput from '../form-inputs/text-input/text-input.component';
import CustomButton from '../custom-button/custom-button.component';

// STYLES
import {
  Card,
  Add,
  AddText,
  EditForm,
  FormTitle,
  TwoColumnsModal,
} from './empty-shipping-card.styles';

// ICONS
import { BsPlusCircle } from 'react-icons/bs';

const EmptyShippingCard = () => {
  // ----------------------------- STATE AND CONSTANTS ----------------
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
      <Card onClick={() => setOpen(true)}>
        <Add>
          <AddText>Añadir dirección</AddText>
          <BsPlusCircle />
        </Add>
      </Card>

      <AnimatePresence>
        {open && (
          <Modal handleClose={() => setOpen(false)}>
            <EditForm>
              <FormTitle>Añadir dirección</FormTitle>
              <TwoColumnsModal>
                <TextInput
                  type='text'
                  label='Estado'
                  name='state'
                  value={state}
                  handleChange={handleChange}
                  required
                />
                <TextInput
                  type='text'
                  label='Ciudad'
                  name='city'
                  value={city}
                  handleChange={handleChange}
                  required
                />
                <TextInput
                  type='text'
                  label='Código postal'
                  name='postalCode'
                  value={postalCode}
                  handleChange={handleChange}
                  required
                />
                <TextInput
                  type='text'
                  label='Teléfono'
                  name='phone'
                  value={phone}
                  handleChange={handleChange}
                  required
                />
              </TwoColumnsModal>
              <TextInput
                type='text'
                label='Colonia'
                name='suburb'
                value={suburb}
                handleChange={handleChange}
                required
              />
              <TextInput
                type='text'
                label='Dirección'
                name='address'
                value={address}
                handleChange={handleChange}
                required
              />
              <TextInput
                type='text'
                label='Referencias'
                name='references'
                value={references}
                handleChange={handleChange}
              />
              <TextInput
                type='text'
                label='Instrucciones de entrega'
                name='instructions'
                value={instructions}
                handleChange={handleChange}
              />
              <CustomButton primary>Añadir dirección</CustomButton>
            </EditForm>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default EmptyShippingCard;
