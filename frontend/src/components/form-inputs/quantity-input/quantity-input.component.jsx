import React, { useState } from 'react';

// STYLES
import { Container, Input, Operator } from './quantity-input.styles';

const QuantityInput = ({ limit = 10 }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Container>
      <Operator>-</Operator>
      <Input />
      <Operator>+</Operator>
    </Container>
  );
};

export default QuantityInput;
