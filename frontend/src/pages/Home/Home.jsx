import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Product from '../../components/product/Product.component';

// Styles
import { Container, ProductsContainer } from './Home.styles';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      // const res = await axios.get('/api/products');
      // setProducts(res.data);
      setProducts(data);
    };

    fetchProducts();
  }, []);

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
