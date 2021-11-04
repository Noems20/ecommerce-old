import React, { useState } from 'react';
import PropTypes from 'prop-types';

// REDUX

// COMPONENTS
import Rating from '../rating/rating.component';

// STYLES
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
} from './product.styles';

const Product = ({ product }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <Card>
      <CardHead>
        <CardImg src={product.mainImage} />
        {counter >= product.countInStock ? (
          <AddItem disabled>Sin existencia</AddItem>
        ) : (
          <AddItem onClick={handleClick}>Añadir a carrito</AddItem>
        )}
        <ImageCaption to={`/producto/${product._id}`} />
      </CardHead>
      <CardBody>
        <CardPrice>Desde ${product.price}</CardPrice>
        <CardTitle to={`/producto/${product._id}`}>{product.name}</CardTitle>
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
