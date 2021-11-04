import React from 'react';
import products from './products';

// REDUX

// COMPONENTS
import Product from '../../components/product/product.component';

// STYLES
import { Container, ProductsContainer } from './home.page.styles';

const Home = () => {
  return (
    <Container>
      <ProductsContainer>
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
};

export default Home;
