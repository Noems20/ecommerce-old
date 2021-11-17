import React from 'react';

// STYLES
import { Card, Add, AddText } from './empty-shipping-card.styles';

// ICONS
import { BsPlusCircle } from 'react-icons/bs';

const EmptyShippingCard = () => {
  return (
    <Card>
      <Add>
        <AddText>Añadir dirección</AddText>
        <BsPlusCircle />
      </Add>
    </Card>
  );
};

export default EmptyShippingCard;
