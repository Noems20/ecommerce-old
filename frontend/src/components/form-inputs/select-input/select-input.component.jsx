import React from 'react';
import { AnimatePresence } from 'framer-motion';

// Styles
import { Container, Text, Items } from './select-input.styles';

const containerVariants = {
  hidden: {
    height: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  visible: {
    height: 'auto',
    transition: {
      ease: 'easeInOut',
    },
  },
};

const Select = ({ title, open, children }) => {
  return (
    <>
      <Text>{title}</Text>
      <AnimatePresence>
        {open && (
          <Container
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <Items>{children}</Items>
          </Container>
        )}
      </AnimatePresence>
    </>
  );
};

export default Select;
