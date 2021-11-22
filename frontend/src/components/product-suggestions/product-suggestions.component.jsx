import React from 'react';

// COMPONENTS
import ProductCard from '../product-card/product-card.component';

// STYLES
import {
  Container,
  ProductSuggestionsTitle,
  ProductsGrid,
} from './product-suggestions.styles';

// IMAGES
import agenda1 from './agenda1.png';
import agenda2 from './agenda2.png';
import agenda3 from './agenda3.png';
import agenda4 from './agenda4.png';

const ProductSuggestions = () => {
  return (
    <Container>
      <ProductSuggestionsTitle>Te podria interesar</ProductSuggestionsTitle>
      <ProductsGrid>
        <ProductCard productImage={agenda1} title='Agenda 2022' tag='AGEN' />
        <ProductCard
          productImage={agenda2}
          title='Encuadernado azul'
          tag='AGEN'
        />
        <ProductCard productImage={agenda3} title='Agenda MTIE' tag='AGEN' />
        <ProductCard productImage={agenda4} title='Agenda UAD' tag='AGEN' />
      </ProductsGrid>
    </Container>
  );
};

export default ProductSuggestions;
