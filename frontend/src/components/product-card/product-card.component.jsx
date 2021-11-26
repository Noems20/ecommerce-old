import React from 'react';
import { Link } from 'react-router-dom';
// COMPONENTS
import Rating from '../rating/rating.component';

// STYLES
import './product-card.styles.scss';
import {
  Container,
  Card,
  ImageBox,
  Image,
  ContentBox,
  Title,
  Price,
  Button,
} from './product-card.styles';

const ProductCard = ({ title, productImage }) => {
  const containerVariants = {
    hidden: {
      y: '100vh',
      opacity: 0,
      scale: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Container>
      <Card>
        <ImageBox>
          <Image src={productImage} alt='Product' />
        </ImageBox>
        <ContentBox>
          <Title>{title}</Title>
          <Price>$750</Price>
          <Rating value={4.5} text='4.5 de 5' />
          <Button
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            as={Link}
            to='#'
          >
            Comprar ahora
          </Button>
        </ContentBox>
      </Card>
    </Container>
  );
};

export default ProductCard;
