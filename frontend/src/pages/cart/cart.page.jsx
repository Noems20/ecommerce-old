import React from 'react';

// REDUX

// COMPONENTS
import CartItemsContainer from '../../components/cart/cart-items-container/cart-items-container.component';
import CartOrderSummary from '../../components/cart/cart-order-summary/cart-order-summary.component';
import ProductSuggestions from '../../components/product-suggestions/product-suggestions.component';

// STYLES
import { Container } from './cart.page.styles';
import { PageGrid } from '../../general.styles';

const Cart = () => {
  return (
    <PageGrid>
      <Container>
        <CartItemsContainer />
        <CartOrderSummary />
      </Container>
      <ProductSuggestions catalog='agendas' />
    </PageGrid>
  );
};

export default Cart;
