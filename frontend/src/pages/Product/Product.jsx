import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  listProductDetails,
  clearProductDetails,
} from '../../redux/product/productActions';
import { addToCartFromProduct } from '../../redux/cart/cartActions';

// Components
import CustomButton from '../../components/customButton/CustomButton.component';
import Rating from '../../components/rating/Rating';
import FullScreenMessage from '../../components/messages/FullScreenMessage/FullScreenMessage.component';
import Loader from '../../components/loader/loader.component';
import DropDown from '../../components/Inputs/dropDown/DropDown.component';

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
} from './Product.styles';

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

const Product = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const [focusImage, setFocusImage] = useState('');

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
    return () => {
      dispatch(clearProductDetails());
    };
  }, [dispatch, match]);

  const addToCartHandler = () => {
    dispatch(addToCartFromProduct(product, Number(qty)));
    history.push('/carrito');
  };
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <FullScreenMessage>{error}</FullScreenMessage>
      ) : (
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
                <DropDown
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
                </DropDown>
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
      )}
    </Container>
  );
};

export default Product;
