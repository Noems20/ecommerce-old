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

const ProductCard = ({ product }) => {
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
          <Image
            src={`/img/products/${product.subcategory.color[0].image}`}
            alt='Product'
          />
        </ImageBox>
        <ContentBox>
          <Title>{product.name}</Title>
          <Price>{`$${product.price}`}</Price>
          <Rating
            value={product.ratingsAverage}
            text={`${product.ratingsAverage} de 5`}
          />
          <Button
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            as={Link}
            to={`producto/${product.slug}`}
          >
            Comprar ahora
          </Button>
        </ContentBox>
      </Card>
    </Container>
  );
};

export default ProductCard;
