import React from 'react';
import AnimatedBigLogo from '../../utils/logos/bigLogo/animatedBigLogo';
import { Container, Content, Text } from './message.styles';

const Message = ({ children }) => {
  return (
    <Container>
      <Content>
        <Text>{children}</Text>
        <AnimatedBigLogo />
      </Content>
    </Container>
  );
};

export default Message;
