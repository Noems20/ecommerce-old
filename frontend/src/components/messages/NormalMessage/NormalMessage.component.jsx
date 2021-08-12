import React from 'react';

// Styles
import { Container, Text } from './NormalMessage.styles';

const NormalMessage = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

export default NormalMessage;
