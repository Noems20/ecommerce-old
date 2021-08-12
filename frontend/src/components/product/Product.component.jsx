import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCartOne } from '../../redux/cart/cartActions';

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
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === product._id
  );

  useEffect(() => {
    if (existingCartItem) {
      setCounter(existingCartItem.qty);
    } else {
      setCounter(0);
    }
  }, [existingCartItem]);

  const handleClick = () => {
    dispatch(addToCartOne(product));
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
