import React from 'react';

// REDUX

// COMPONENTS
// import CustomButton from '../../components/customButton/CustomButton.component';
// import DropDown from '../../components/Inputs/dropDown/DropDown.component';

// STYLES
import {
  Container,
  // Message,
  // NoItemsContainer,
  CartContainer,
  ItemsContainerTitle,
  // ItemsContainer,
  // Item,
  // ItemImage,
  // ItemDetails,
  // ItemName,
  // ItemRemove,
  // ItemTotalPrice,
  // OrderSummary,
  // OrderSummaryTitle,
  // OrderLine,
  // RightText,
  // LeftText,
  // Button,
} from './cart.page.styles';

const Cart = ({ history }) => {
  // const removeFromCartHandler = (id) => {};

  // const checkoutHandler = () => {
  //   history.push('/login?redirect=envio');
  // };

  return (
    <Container>
      {/* <CartContainer itemsCount={cartItems.length}> */}
      <CartContainer itemsCount={2}>
        <ItemsContainerTitle>Tu Carrito</ItemsContainerTitle>
        {/* {cartItems.length === 0 ? (
          <NoItemsContainer>
            <Message>Tu carrito está vacío</Message>
            <CustomButton onClick={() => history.push('/')}>
              Continua comprando
            </CustomButton>
          </NoItemsContainer>
        ) : (
          <ItemsContainer>
            {cartItems.map((item, index) => (
              <Item
                key={item._id}
                className={
                  cartItems.length > 1 && index + 1 !== cartItems.length
                    ? 'Separation'
                    : ''
                }
              >
                <ItemImage src={item.image} />
                <ItemDetails>
                  <ItemName to={`/producto/${item._id}`}>{item.name}</ItemName>
                  <ItemRemove onClick={() => removeFromCartHandler(item._id)}>
                    Eliminar
                  </ItemRemove>
                </ItemDetails>
                <DropDown
                  label='Cantidad'
                  value={item.qty}
                  onChange={(e) =>
                    dispatch(addToCart(item._id, Number(e.target.value)))
                  }
                >
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </DropDown>
                <ItemTotalPrice>$ {item.price}</ItemTotalPrice>
              </Item>
            ))}
          </ItemsContainer>
        )} */}
      </CartContainer>
      {/* {cartItems.length === 0 ? null : (
        <OrderSummary>
          <OrderSummaryTitle>Resumen de orden</OrderSummaryTitle>
          <OrderLine>
            <RightText>Subtotal</RightText>
            <LeftText>
              ${' '}
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </LeftText>
          </OrderLine>
          <OrderLine>
            <RightText>Envio</RightText>
            <LeftText>$ 60</LeftText>
          </OrderLine>
          <OrderLine>
            <RightText>IVA</RightText>
            <LeftText>$ 60</LeftText>
          </OrderLine>
          <Button
            type='button'
            disabled={cartItems.length === 0}
            onClick={checkoutHandler}
          >
            Proceder al pago
          </Button>
        </OrderSummary>
      )} */}
    </Container>
  );
};

export default Cart;
