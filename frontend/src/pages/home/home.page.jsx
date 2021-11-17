// import React from 'react';
// import products from './products';

// REDUX

// COMPONENTS
// import Product from '../../components/product/product.component';
import ProductCard from '../../components/product-card/product-card.component';

// STYLES
import { PageGrid } from '../../general.styles';
import { ProductsContainer } from './home.page.styles';

// IMAGENES
import agenda1 from './agenda1.png';
import agenda2 from './agenda2.png';
import agenda3 from './agenda3.png';
import agenda4 from './agenda4.png';
import agenda5 from './agenda5.png';
import agenda6 from './agenda6.png';
import agenda7 from './agenda7.png';
import agenda8 from './agenda8.png';
// import agenda9 from './agenda9.png';

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
        {/* {products.map((product, index) => (
          <Product key={index} product={product} />
        ))} */}
        <ProductCard productImage={agenda1} title='Agenda 2022' tag='AGEN' />
        <ProductCard
          productImage={agenda2}
          title='Encuadernado azul'
          tag='AGEN'
        />
        <ProductCard productImage={agenda3} title='Agenda MTIE' tag='AGEN' />
        <ProductCard productImage={agenda4} title='Agenda UAD' tag='AGEN' />
        <ProductCard productImage={agenda5} title='Agenda IEZ' tag='AGEN' />
        <ProductCard
          productImage={agenda6}
          title='Encuadernado keratol'
          tag='AGEN'
        />
        <ProductCard productImage={agenda7} title='Agenda UTZAC' tag='AGEN' />
        <ProductCard
          productImage={agenda8}
          title='Encuadernado keratol'
          tag='AGEN'
        />
        {/* <ProductCard productImage={agenda9} title='Agenda 2022' tag='AGEN' /> */}
      </ProductsContainer>
    </PageGrid>
  );
};

export default Home;
