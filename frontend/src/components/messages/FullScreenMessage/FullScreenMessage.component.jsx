import React from 'react';
import AnimatedBigLogo from '../../../utils/logos/bigLogo/animatedBigLogo';
import { Container, Content, Text } from './FullScreenMessage.styles';

const FullScreenMessage = ({ children }) => {
  return (
    <Container>
      <Content>
        <Text>{children}</Text>
        <AnimatedBigLogo />
      </Content>
    </Container>
  );
};

export default FullScreenMessage;
