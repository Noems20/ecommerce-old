import React, { useState, useEffect } from 'react';

// REDUX

// COMPONENTS
import CustomButton from '../custom-button/custom-button.component';
import Rating from '../rating/rating.component';
import ImageMagnifier from '../image-magnifier/image-magnifier.component';
import QuantityInput from '../form-inputs/quantity-input/quantity-input.component';

// STYLES
import {
  ProductContainer,
  ImageContainer,
  SecondaryImagesContainer,
  ProductImage,
  InfoContainer,
  ProductTitle,
  DetailsTitle,
  ProductPrice,
  DetailsContainer,
  ColorItemsContainer,
  SizeItemsContainer,
  ColorDot,
  InfoTitle,
  Description,
  DescriptionText,
  List,
  ListItem,
  SizeItem,
} from './product.styles';

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

const Product = ({ history }) => {
  // --------------------------------- STATE AND CONSTANTS ----------------------------
  const [qty, setQty] = useState(1);
  const [focusImage, setFocusImage] = useState('');
  const [collapse, setCollapse] = useState(false);
  const [selectedSize, setSelectedSize] = useState('XS');
  const [selectedColor, setSelectedColor] = useState('#32a852');
  const limit = 14;

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

  // ------------------------------ USE EFFECT'S --------------------------------
  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }

    function handleResize() {
      if (window.innerWidth <= 1000) {
        setCollapse(true);
      } else {
        setCollapse(false);
      }
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // --------------------------------- HANDLERS -------------------------
  const addToCartHandler = () => {
    history.push('/carrito');
  };

  const handleQuantityChange = (e) => {
    const { value } = e.target;

    if (value === '') {
      setQty(value);
    } else if (value > limit) {
      setQty(limit);
    } else if (value < 1) {
      setQty(1);
    } else {
      setQty(value);
    }
  };

  const productImages = (
    <>
      <ImageContainer>
        <ImageMagnifier src={focusImage ? focusImage : agenda1} width={'56%'} />
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
    </>
  );

  return (
    <ProductContainer>
      {!collapse && productImages}
      <InfoContainer>
        <ProductTitle>Agenda de la mejor UAD - 2022</ProductTitle>
        <ProductPrice>
          $750<span>Impuesto incluido.</span>
        </ProductPrice>
        {/* ------------- RATING ------------- */}
        <Rating value={4.5} text={`8 reseñas`} />
        {/* ------------- COLORS -------------- */}
        <DetailsContainer>
          <DetailsTitle>Color</DetailsTitle>
          <ColorItemsContainer>
            <ColorDot
              color={'#32a852'}
              className={selectedColor === '#32a852' ? 'selected' : ''}
              onClick={() => setSelectedColor('#32a852')}
            />
            <ColorDot
              color={'#a83232'}
              className={selectedColor === '#a83232' ? 'selected' : ''}
              onClick={() => setSelectedColor('#a83232')}
            />
            <ColorDot
              color={'#8332a8'}
              className={selectedColor === '#8332a8' ? 'selected' : ''}
              onClick={() => setSelectedColor('#8332a8')}
            />
            <ColorDot
              color={'#5a90db'}
              className={selectedColor === '#5a90db' ? 'selected' : ''}
              onClick={() => setSelectedColor('#5a90db')}
            />
            <ColorDot
              color={'#dbb45a'}
              className={selectedColor === '#dbb45a' ? 'selected' : ''}
              onClick={() => setSelectedColor('#dbb45a')}
            />
            <ColorDot
              color={'#000'}
              className={selectedColor === '#000' ? 'selected' : ''}
              onClick={() => setSelectedColor('#000')}
            />
            <ColorDot
              color={'#fff'}
              className={selectedColor === '#fff' ? 'selected' : ''}
              onClick={() => setSelectedColor('#fff')}
            />
          </ColorItemsContainer>
        </DetailsContainer>
        {/* ------------- SIZES -------------- */}
        <DetailsContainer>
          <DetailsTitle>Talla</DetailsTitle>
          <SizeItemsContainer>
            <SizeItem
              className={selectedSize === 'XS' ? 'selected' : ''}
              onClick={() => setSelectedSize('XS')}
            >
              XS
            </SizeItem>
            <SizeItem
              className={selectedSize === 'S' ? 'selected' : ''}
              onClick={() => setSelectedSize('S')}
            >
              S
            </SizeItem>
            <SizeItem
              className={selectedSize === 'M' ? 'selected' : ''}
              onClick={() => setSelectedSize('M')}
            >
              M
            </SizeItem>
            <SizeItem
              className={selectedSize === 'L' ? 'selected' : ''}
              onClick={() => setSelectedSize('L')}
            >
              L
            </SizeItem>
            <SizeItem
              className={selectedSize === 'XL' ? 'selected' : ''}
              onClick={() => setSelectedSize('XL')}
            >
              XL
            </SizeItem>
            <SizeItem
              className={selectedSize === 'XXL' ? 'selected' : ''}
              onClick={() => setSelectedSize('XXL')}
            >
              XXL
            </SizeItem>
          </SizeItemsContainer>
        </DetailsContainer>
        {/* ------------- CANTIDAD -------------- */}
        <DetailsContainer>
          <DetailsTitle>Cantidad</DetailsTitle>
          <QuantityInput
            quantity={qty}
            limit={limit}
            setQuantity={setQty}
            handleChange={handleQuantityChange}
            required
          />
        </DetailsContainer>
        {/* ------------- ADD TO CART ------------- */}
        <CustomButton primary onClick={addToCartHandler}>
          Añadir a carrito
        </CustomButton>
        {/* ------------ PRODUCT IMGAES ------------- */}
        {collapse && productImages}

        {/* ------------- DESCRIPTION ------------- */}
        <Description>
          <InfoTitle>Descripción</InfoTitle>
          <DescriptionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            faucibus efficitur nisi. Cras pretium in ante sed feugiat. Donec
            vestibulum risus sit amet nisi pharetra, luctus luctus ante
            pellentesque. Sed lacus velit, pretium ut nisl ac, euismod feugiat
            felis. Fusce mi libero, pretium sit amet pretium sed, rutrum vitae
            lacus.
          </DescriptionText>
        </Description>
        {/* ------------- MEASUREMENTS ------------- */}
        <Description>
          <InfoTitle>Especifiaciones</InfoTitle>
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
  );
};

export default Product;
