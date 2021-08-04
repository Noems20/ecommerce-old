import React from 'react';
import PropTypes from 'prop-types';

// Components
import Rating from '../rating/Rating';

// Styles
import {
  Card,
  CardImg,
  CardHead,
  ImageCaption,
  AddItem,
  CardBody,
  CardTitle,
  CardReview,
  CardPrice,
} from './Product.styles';

const Product = ({ product }) => {
  return (
    <Card>
      <CardHead>
        <CardImg src={product.image} />
        <ImageCaption>
          <AddItem>Añadir a carrito</AddItem>
        </ImageCaption>
      </CardHead>
      <CardBody>
        <CardPrice>Desde ${product.price}</CardPrice>
        <CardTitle to='/'>{product.name}</CardTitle>
        <CardReview>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </CardReview>
      </CardBody>
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
