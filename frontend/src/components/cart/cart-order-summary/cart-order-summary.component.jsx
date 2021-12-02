import React from 'react';

// COMPONENTS
import CustomButton from '../../custom-button/custom-button.component';

// STYLES
import {
  Container,
  Title,
  OrderInfo,
  OrderInfoTitle,
  ItemsContainer,
  ItemName,
  ItemQuantity,
  ItemPrice,
  TotalContainer,
} from './cart-order-summary.styles';

const OrderInfoItem = ({ name, price, quantity = null }) => {
  return (
    <>
      <ItemName>{name}</ItemName>
      {quantity && <ItemQuantity>x {quantity}</ItemQuantity>}
      <ItemPrice>{`$${price}`}</ItemPrice>
    </>
  );
};

const CartOrderSummary = () => {
  return (
    <Container>
      <Title>Resumen de orden</Title>
      <OrderInfo>
        <OrderInfoTitle>Productos</OrderInfoTitle>
        <ItemsContainer>
          <OrderInfoItem
            name='Taza de los Golden State Warriors'
            price='225'
            quantity={5}
          />
          <OrderInfoItem
            name='Taza de los Dallas Mavericks'
            price='225'
            quantity={5}
          />
          <OrderInfoItem
            name='Taza de los Angeles Lakers'
            price='225'
            quantity={5}
          />
          <OrderInfoItem name='Agenda 2022' price='225' quantity={5} />
        </ItemsContainer>
        <OrderInfoTitle>Total</OrderInfoTitle>
        <TotalContainer>
          <OrderInfoItem name={`Subtotal(20)`} price='2250' />
          <OrderInfoItem name='Envio' price='50' />
          <OrderInfoItem name='Precio total' price='2300' />
        </TotalContainer>
        <CustomButton primary>Proceder al pago</CustomButton>
      </OrderInfo>
    </Container>
  );
};

export default CartOrderSummary;
