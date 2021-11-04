import React, { useState } from 'react';

// Redux

// Components
import CustomButton from '../../components/custom-button/custom-button.component';
import Rating from '../../components/rating/rating.component';
import Select from '../../components/form-inputs/select-input/select-input.component';

// Styles
import {
  Container,
  ImageContainer,
  SecondaryImagesContainer,
  ProductImage,
  InfoContainer,
  ProductTitle,
  ProductPrice,
  AddToCart,
  NoExistenceText,
  InfoTitle,
  Description,
  DescriptionText,
  List,
  ListItem,
} from './product.page.styles';

const imageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  hover: {
    scale: 1.1,
    boxShadow: '0 0 8px #5e5e5e',
  },
};

const Product = ({ match, history, product }) => {
  const [qty, setQty] = useState(1);
  const [focusImage, setFocusImage] = useState('');

  const addToCartHandler = () => {
    history.push('/carrito');
  };
  return (
    <Container>
      <>
        <ImageContainer>
          <ProductImage
            src={focusImage ? focusImage : product.mainImage}
            variants={imageVariants}
            initial='hidden'
            animate='visible'
          />
          <SecondaryImagesContainer>
            {product.productImages.map((productImage, index) => {
              let spanClass;
              if (focusImage.length > 0) {
                spanClass = productImage === focusImage ? 'active' : '';
              } else if (productImage === product.mainImage) {
                spanClass = 'active';
              }
              return (
                <ProductImage
                  key={index}
                  src={productImage}
                  onClick={() => setFocusImage(productImage)}
                  style={{ cursor: 'pointer' }}
                  variants={imageVariants}
                  whileHover='hover'
                  className={spanClass}
                />
              );
            })}
          </SecondaryImagesContainer>
        </ImageContainer>
        <InfoContainer>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>${product.price}</ProductPrice>
          {/* ADD TO CART */}
          {product.countInStock > 0 ? (
            <AddToCart>
              <Select
                label='Cantidad'
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                disabled={product.countInStock === 0}
              >
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </Select>
              <CustomButton
                onClick={addToCartHandler}
                disabled={product.countInStock === 0}
              >
                {product.countInStock === 0
                  ? 'Sin existencia'
                  : 'Añadir a carrito'}
              </CustomButton>
            </AddToCart>
          ) : (
            <NoExistenceText>Sin existencia</NoExistenceText>
          )}
          {/* RATING */}
          <Rating
            value={product.rating}
            text={`${product.numReviews} reseñas`}
          />
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
                <strong>Ancho:</strong> {product?.measures?.width}
              </ListItem>
              <ListItem>
                <strong>Alto:</strong> {product?.measures?.height}
              </ListItem>
              <ListItem>
                <strong>Profundidad:</strong> {product?.measures?.depth}
              </ListItem>
            </List>
          </Description>
        </InfoContainer>
      </>
    </Container>
  );
};

export default Product;
