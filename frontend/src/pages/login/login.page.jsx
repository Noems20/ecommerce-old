import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// COMPONENTS
import FormContainer from '../../components/form-container/form-container.component';
import ForgotPassword from '../../components/sign-card/forgot-password/forgot-password.component';
import SignIn from '../../components/sign-in/sign-in.component';

// STYLES
import { PageGrid } from '../../general.styles';

const Login = () => {
  // ---------------------------- STATE AND CONSTANTS --------------------
  const [currentTab, setCurrentTab] = useState('login');

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const cardVariants = {
    hidden: {
      x: '-100vw',
    },
    visible: {
      x: 0,
    },
    exit: {
      x: '100vw',
    },
  };

  return (
    <PageGrid
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <FormContainer>
        <AnimatePresence exitBeforeEnter>
          {currentTab === 'login' ? (
            <SignIn setTab={setCurrentTab} key={1} variants={cardVariants} />
          ) : (
            <ForgotPassword
              setTab={setCurrentTab}
              key={2}
              variants={cardVariants}
            />
          )}
        </AnimatePresence>
      </FormContainer>
    </PageGrid>
  );
};

export default Login;
