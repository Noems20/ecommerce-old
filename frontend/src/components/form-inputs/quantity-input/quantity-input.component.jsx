import React, { useState } from 'react';

// STYLES
import { Container, Input, Operator } from './quantity-input.styles';

const QuantityInput = ({
  handleChange,
  limit = 10,
  quantity,
  setQuantity,
  ...props
}) => {
  return (
    <Container>
      <Operator
        onClick={() => quantity > 1 && setQuantity(Number(quantity) - 1)}
      >
        -
      </Operator>
      <Input onChange={handleChange} value={quantity} {...props} />
      <Operator
        onClick={() => quantity < limit && setQuantity(Number(quantity) + 1)}
      >
        +
      </Operator>
    </Container>
  );
};

export default QuantityInput;
