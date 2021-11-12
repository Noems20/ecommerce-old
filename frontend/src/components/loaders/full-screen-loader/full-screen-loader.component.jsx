import React from 'react';

// import AnimatedLogo from '../../../utils/logos/bigLogo/animated-logo';
import Logo from '../../../utils/logos/bigLogo/logo';

import { Container, LogoContainer } from './full-screen-loader.styles';

const FullScreenLoader = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </Container>
  );
};

export default FullScreenLoader;
