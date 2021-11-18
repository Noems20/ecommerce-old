import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// COMPONENTS
import Modal from '../modal/modal.component';
import TextInput from '../form-inputs/text-input/text-input.component';
import SelectInput from '../form-inputs/select-input/select-input.component';
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
  // const [city, setCity] = useState('');
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
                textarea
                type='text'
                label='Referencias'
                name='references'
                value={references}
                handleChange={handleChange}
              />
              <TextInput
                textarea
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
