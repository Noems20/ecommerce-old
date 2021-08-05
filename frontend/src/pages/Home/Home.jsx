import React from 'react';
import products from '../../products';

// Components
import Product from '../../components/product/Product.component';

// Styles
import { Container, ProductsContainer } from './Home.styles';

const Home = () => {
  return (
    <Container>
      <ProductsContainer>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
};

export default Home;
