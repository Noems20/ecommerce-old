import React, { useState } from 'react';

// REDUX

// COMPONENTS
import CustomButton from '../../components/custom-button/custom-button.component';
import Rating from '../../components/rating/rating.component';
import Select from '../../components/form-inputs/select-input/select-input.component';

// STYLES
import {
  ProductContainer,
  ImageContainer,
  SecondaryImagesContainer,
  ExpandedProductImage,
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

import { PageGrid } from '../../general.styles';

// IMAGENES
import agenda1 from './agenda1.png';
import agenda2 from './agenda2.png';
import agenda3 from './agenda3.png';
import agenda4 from './agenda4.png';
import agenda5 from './agenda5.png';
import agenda6 from './agenda6.png';
import agenda7 from './agenda7.png';
import agenda8 from './agenda8.png';
import agenda9 from './agenda9.png';

const Product = ({ match, history, product }) => {
  // --------------------------------- STATE AND CONSTANTS ----------------------------
  const [qty, setQty] = useState(1);
  const [focusImage, setFocusImage] = useState('');

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

  // --------------------------------- HANDLERS -------------------------
  const addToCartHandler = () => {
    history.push('/carrito');
  };
  return (
    <PageGrid>
      <ProductContainer>
        <ImageContainer>
          <ExpandedProductImage
            src={focusImage ? focusImage : agenda1}
            variants={imageVariants}
            initial='hidden'
            animate='visible'
          />
        </ImageContainer>
        <SecondaryImagesContainer>
          <ProductImage
            key={2}
            src={agenda2}
            onClick={() => setFocusImage(agenda2)}
            variants={imageVariants}
            whileHover='hover'
          />
          <ProductImage
            key={3}
            src={agenda3}
            onClick={() => setFocusImage(agenda3)}
            variants={imageVariants}
            whileHover='hover'
          />
          <ProductImage
            key={4}
            src={agenda4}
            onClick={() => setFocusImage(agenda4)}
            variants={imageVariants}
            whileHover='hover'
          />
          <ProductImage
            key={5}
            src={agenda5}
            onClick={() => setFocusImage(agenda5)}
            variants={imageVariants}
            whileHover='hover'
          />
          <ProductImage
            key={6}
            src={agenda6}
            onClick={() => setFocusImage(agenda6)}
            variants={imageVariants}
            whileHover='hover'
          />
          <ProductImage
            key={7}
            src={agenda7}
            onClick={() => setFocusImage(agenda7)}
            variants={imageVariants}
            whileHover='hover'
          />
          <ProductImage
            key={8}
            src={agenda8}
            onClick={() => setFocusImage(agenda8)}
            variants={imageVariants}
            whileHover='hover'
          />
          <ProductImage
            key={9}
            src={agenda9}
            onClick={() => setFocusImage(agenda9)}
            variants={imageVariants}
            whileHover='hover'
          />
        </SecondaryImagesContainer>
        <InfoContainer>
          <ProductTitle>
            Agenda de la mejor calidad fabricada por mineros zacatecanos
          </ProductTitle>
          <ProductPrice>$750</ProductPrice>
          {/* ADD TO CART */}
          {/* {product.countInStock > 0 ? ( */}
          <AddToCart>
            <Select
              label='Cantidad'
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              // disabled={product.countInStock === 0}
            >
              {/* {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))} */}
              <option key={1} value={1}>
                {1}
              </option>
              <option key={2} value={2}>
                {2}
              </option>
              <option key={3} value={3}>
                {3}
              </option>
            </Select>
            <CustomButton
              onClick={addToCartHandler}
              // disabled={product.countInStock === 0}
            >
              {/* {product.countInStock === 0
                  ? 'Sin existencia'
                  : 'Añadir a carrito'} */}
              Añadir a carrito
            </CustomButton>
          </AddToCart>
          {/* ) : (  <NoExistenceText>Sin existencia</NoExistenceText>
           )} */}
          {/* RATING */}
          <Rating value={4.5} text={`8 reseñas`} />
          {/* DESCRIPTION */}
          <Description>
            <InfoTitle>Descripción</InfoTitle>
            <DescriptionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse faucibus efficitur nisi. Cras pretium in ante sed
              feugiat. Donec vestibulum risus sit amet nisi pharetra, luctus
              luctus ante pellentesque. Sed lacus velit, pretium ut nisl ac,
              euismod feugiat felis. Fusce mi libero, pretium sit amet pretium
              sed, rutrum vitae lacus.
            </DescriptionText>
          </Description>
          {/* MEASUREMENTS */}
          <Description>
            <InfoTitle>Medidas</InfoTitle>
            <List>
              <ListItem>
                <strong>Ancho:</strong> 55cm^2
              </ListItem>
              <ListItem>
                <strong>Alto:</strong> 55cm^2
              </ListItem>
              <ListItem>
                <strong>Profundidad:</strong> 55cm^2
              </ListItem>
            </List>
          </Description>
        </InfoContainer>
      </ProductContainer>
    </PageGrid>
  );
};

export default Product;
