import React, { useEffect } from 'react';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductSuggestions } from '../../redux/products/productsActions';

// COMPONENTS
import ProductCard from '../product-card/product-card.component';

// STYLES
import {
  Container,
  ProductSuggestionsTitle,
  ProductsGrid,
} from './product-suggestions.styles';

// IMAGES

const ProductSuggestions = ({ catalog, id }) => {
  // ------------------------------- STATE AND CONSTANTS -------------------
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  // ------------------------------- USE EFFECT'S ---------------------------
  useEffect(() => {
    dispatch(fetchProductSuggestions(catalog, 4, id));
    return () => {};
  }, [dispatch, catalog, id]);

  return (
    <Container>
      <ProductSuggestionsTitle>Te podria interesar</ProductSuggestionsTitle>
      <ProductsGrid>
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
        {/* <ProductCard productImage={agenda1} title='Agenda 2022' tag='AGEN' />
        <ProductCard
          productImage={agenda2}
          title='Encuadernado azul'
          tag='AGEN'
        />
        <ProductCard productImage={agenda3} title='Agenda MTIE' tag='AGEN' />
        <ProductCard productImage={agenda4} title='Agenda UAD' tag='AGEN' /> */}
      </ProductsGrid>
    </Container>
  );
};

export default ProductSuggestions;
