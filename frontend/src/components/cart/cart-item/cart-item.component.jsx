import React from 'react';

// COMPONENTS
import QuantityInput from '../../form-inputs/quantity-input/quantity-input.component';
import CustomButton from '../../custom-button/custom-button.component';

// STYLES
import {
  Container,
  Content,
  ImageContainer,
  InfoContainer,
  QuantityContainer,
  PriceContainer,
  Image,
  Title,
  Detail,
  ColorDot,
  SizeItem,
  Price,
  Decoration,
  InfoSubContainer,
} from './cart-item.styles';

const CartItem = ({ cartProduct }) => {
  return (
    <Container>
      <Content>
        <ImageContainer>
          <Image
            src={`/img/products/product-${cartProduct._id}-${cartProduct.colorname}.png`}
            alt='producto'
          />
        </ImageContainer>
        <InfoContainer>
          <Title>{cartProduct.name}</Title>
          <InfoSubContainer>
            {cartProduct.for !== 'general' && (
              <Detail>Para: {cartProduct.for}</Detail>
            )}
            <Detail>
              Color:
              <ColorDot color={`#${cartProduct.colorname}`} />
            </Detail>
            {cartProduct.size !== 'general' && (
              <Detail>
                Talla:
                <SizeItem className={'selected'}>{cartProduct.size}</SizeItem>
              </Detail>
            )}
          </InfoSubContainer>
        </InfoContainer>
        <QuantityContainer>
          <Title>Cantidad</Title>
          <QuantityInput quantity={cartProduct.quantity} />
          <CustomButton danger>Eliminar</CustomButton>
        </QuantityContainer>
        <PriceContainer>
          <Title>Precio</Title>
          <Price>{`$${cartProduct.quantity * cartProduct.price}`}</Price>
        </PriceContainer>
      </Content>
      <Decoration />
    </Container>
  );
};

export default CartItem;
