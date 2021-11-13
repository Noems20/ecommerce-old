import React from 'react';

// REDUX

// COMPONENTS
import SignUp from '../../components/sign-up/sign-up.component';
import FormContainer from '../../components/form-container/form-container.component';

// STYLES
import { PageGrid } from '../../general.styles';

const Register = () => {
  // ---------------------------- STATE AND CONSTANTS --------------------

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  // ----------------------------- USE EFFECT'S ------------------------

  // ------------------------------- HANDLERS -------------------------

  return (
    <PageGrid
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <FormContainer>
        <SignUp />
      </FormContainer>
    </PageGrid>
  );
};

export default Register;
