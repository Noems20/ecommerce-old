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
        <AddItem>Añadir a carrito</AddItem>
        <ImageCaption to={`/product/${product._id}`} />
      </CardHead>
      <CardBody>
        <CardPrice>Desde ${product.price}</CardPrice>
        <CardTitle to={`/product/${product._id}`}>{product.name}</CardTitle>
        <CardReview>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reseñas`}
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
