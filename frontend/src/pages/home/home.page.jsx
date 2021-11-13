import React from 'react';
import products from './products';

// REDUX

// COMPONENTS
import Product from '../../components/product/product.component';

// STYLES
import { PageGrid } from '../../general.styles';
import { ProductsContainer } from './home.page.styles';

const Home = () => {
  // -------------------- STATE AND CONSTANTS -------------------
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <PageGrid
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <ProductsContainer>
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </ProductsContainer>
    </PageGrid>
  );
};

export default Home;
