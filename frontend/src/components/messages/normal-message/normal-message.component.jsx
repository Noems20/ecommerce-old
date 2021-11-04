import React from 'react';

// Styles
import { Container, Text } from './normal-message.styles';

const containerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
    },
  },
};

const NormalMessage = ({ children, type }) => {
  return (
    <>
      <Container
        type={type}
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        <Text type={type}>{children}</Text>
      </Container>
    </>
  );
};

export default NormalMessage;
