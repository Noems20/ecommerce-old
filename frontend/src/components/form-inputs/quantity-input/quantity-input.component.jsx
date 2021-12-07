import React from 'react';

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
        type='button'
        onClick={() => quantity > 1 && setQuantity(Number(quantity) - 1)}
      >
        -
      </Operator>
      <Input onChange={handleChange} value={quantity} {...props} />
      <Operator
        type='button'
        onClick={() => quantity < limit && setQuantity(Number(quantity) + 1)}
      >
        +
      </Operator>
    </Container>
  );
};

export default QuantityInput;
