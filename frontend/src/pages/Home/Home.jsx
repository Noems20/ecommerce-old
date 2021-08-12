import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../redux/product/productActions';

// Components
import Product from '../../components/product/Product.component';
import FullScreenMessage from '../../components/messages/FullScreenMessage/FullScreenMessage.component';
import Loader from '../../components/loader/loader.component';

// Styles
import { Container, ProductsContainer } from './Home.styles';

const Home = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <FullScreenMessage>{error}</FullScreenMessage>
      ) : (
        <ProductsContainer>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </ProductsContainer>
      )}
    </Container>
  );
};

export default Home;
