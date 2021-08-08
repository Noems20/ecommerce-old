import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  listProductDetails,
  clearProductDetails,
} from '../../redux/product/productActions';

// Components
import CustomButton from '../../components/customButton/CustomButton.component';
import Rating from '../../components/rating/Rating';
import Message from '../../components/message/message.component';
import Loader from '../../components/loader/loader.component';

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
  DropDown,
  Selector,
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

const Product = ({ match }) => {
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

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
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
              {product.productImages.map((productImage) => {
                let spanClass;
                if (focusImage.length > 0) {
                  spanClass = productImage === focusImage ? 'active' : '';
                } else if (productImage === product.mainImage) {
                  spanClass = 'active';
                }
                return (
                  <ProductImage
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
                {product.countInStock === 0
                  ? 'Sin existencia'
                  : 'Añadir a carrito'}
              </CustomButton>
            </AddToCart>
            {/* RATING */}
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
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
