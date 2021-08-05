import React from 'react';

// Data
import products from '../../products';

// Components
import CustomButton from '../../components/customButton/CustomButton.component';
import Rating from '../../components/rating/Rating';

// Styles
import {
  Container,
  ImageContainer,
  ProductImage,
  InfoContainer,
  ProductTitle,
  ProductPrice,
  AddToCart,
  DropDown,
  Selector,
  InfoTitle,
  Description,
  DescriptionText,
  List,
  ListItem,
} from './Product.styles';

const Product = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

  return (
    <Container>
      <ImageContainer>
        <ProductImage src={product.image} />
      </ImageContainer>
      <InfoContainer>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>${product.price}</ProductPrice>
        {/* ADD TO CART */}
        <AddToCart>
          <DropDown>
            <label style={{ position: 'absolute' }}>Cantidad</label>
            <Selector
              id='cars'
              name='cars'
              disabled={product.countInStock === 0}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </Selector>
          </DropDown>
          <CustomButton disabled={product.countInStock === 0}>
            {product.countInStock === 0 ? 'Sin existencia' : 'Añadir a carrito'}
          </CustomButton>
        </AddToCart>
        {/* RATING */}
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        {/* DESCRIPTION */}
        <Description>
          <InfoTitle>Descripción</InfoTitle>
          <DescriptionText>{product.description}</DescriptionText>
        </Description>
        {/* MEASUREMENTS */}
        <Description>
          <InfoTitle>Medidas</InfoTitle>
          <List>
            <ListItem>
              <strong>Ancho:</strong> 150cm
            </ListItem>
            <ListItem>
              <strong>Alto:</strong> 150cm
            </ListItem>
            <ListItem>
              <strong>Profundidad:</strong> 150cm
            </ListItem>
          </List>
        </Description>
      </InfoContainer>
    </Container>
  );
};

export default Product;
