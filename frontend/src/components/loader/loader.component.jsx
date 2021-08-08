import React from 'react';

// Components
import AnimatedBigLogo from '../../utils/logos/bigLogo/animatedBigLogo';

// Styles
import { Container, LogoContainer } from './loader.styles';

const Loader = () => {
  return (
    <Container>
      <LogoContainer>
        <AnimatedBigLogo />
      </LogoContainer>
    </Container>
  );
};

export default Loader;
