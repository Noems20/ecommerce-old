import React from 'react';

// REDUX

// COMPONENTS
import CartItemsContainer from '../../components/cart/cart-items-container/cart-items-container.component';
import CartOrderSummary from '../../components/cart/cart-order-summary/cart-order-summary.component';
import ProductSuggestions from '../../components/product-suggestions/product-suggestions.component';
import CartItem from '../../components/cart/cart-item/cart-item.component';

// STYLES
import { Container } from './cart.page.styles';
import { PageGrid } from '../../general.styles';

const cartProduct = {
  _id: '61a3ee72a9b6796d1c86360f',
  name: 'Sudadera de Green Bay Packers',
  category: 'sudadera', // ropa -> 'playera', 'sudadera',  everything else -> 'general
  for: 'Hombre', // ropa -> 'hombre', 'mujer', 'niño', 'niña', everything else -> 'general
  price: 449.99,
  colorname: 'fff',
  size: 'XXL',
  quantity: 2,
};

const cartProduct2 = {
  _id: '61a179b861a268b3e16b8b05',
  name: 'Taza de Dallas Mavericks',
  category: 'general', // ropa -> 'playera', 'sudadera',  everything else -> 'general
  for: 'general', // ropa -> 'hombre', 'mujer', 'niño', 'niña', everything else -> 'general
  price: 225,
  colorname: '828282',
  size: 'general',
  quantity: 4,
};

const cartProduct3 = {
  _id: '61a410e29883eb2b44fcf3d8',
  name: 'Agenda de Maestría en Ciencias Biomédicas Tres',
  category: 'general', // ropa -> 'playera', 'sudadera',  everything else -> 'general
  for: 'general', // ropa -> 'hombre', 'mujer', 'niño', 'niña', everything else -> 'general
  price: 349.99,
  colorname: 'fff',
  size: 'general',
  quantity: 1,
};

const Cart = () => {
  return (
    <PageGrid>
      <Container>
        <CartItemsContainer>
          <CartItem cartProduct={cartProduct} />
          <CartItem cartProduct={cartProduct2} />
          <CartItem cartProduct={cartProduct3} />
        </CartItemsContainer>
        <CartOrderSummary />
      </Container>
      <ProductSuggestions catalog='agendas' />
    </PageGrid>
  );
};

export default Cart;
