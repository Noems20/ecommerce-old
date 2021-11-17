import React from 'react';

// COMPONENTS
import ShippingCard from '../../shipping-card/shipping-card.componen';
import EmptyShippingCard from '../../empty-shipping-card/empty-shipping-card.component';

// STYLES
import { Container, Content } from './shipping-tab.styles';
import { Title } from '../tab-styles';

const ShippingTab = ({ variants }) => {
  return (
    <Container
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Title style={{ marginBottom: '2rem' }}>Mis direcciones</Title>
      <Content>
        <ShippingCard />
        <ShippingCard />
        {/* <ShippingCard /> */}
        <EmptyShippingCard />
      </Content>
    </Container>
  );
};

export default ShippingTab;
