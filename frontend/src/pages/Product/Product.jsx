import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      // const res = await axios.get('/api/products');
      // setProducts(res.data);
      setProduct(data);
    };

    fetchProduct();
  }, [match]);

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
    </Container>
  );
};

export default Product;
