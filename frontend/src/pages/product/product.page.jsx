import React from 'react';

// REDUX

// COMPONENTS
import Product from '../../components/product/product.component';
import ProductReviews from '../../components/product-reviews/product-reviews.component';
import ProductSuggestions from '../../components/product-suggestions/product-suggestions.component';

// STYLES
import { PageGrid } from '../../general.styles';
import { Line } from './product.page.styles';

// IMAGENES
const ProductPage = ({ match, history, product }) => {
  // --------------------------------- STATE AND CONSTANTS ----------------------------

  // ------------------------------ USE EFFECT'S --------------------------------

  // --------------------------------- HANDLERS -------------------------

  return (
    <PageGrid>
      <Product />
      <Line />
      <ProductSuggestions />
      <Line />
      <ProductReviews />
    </PageGrid>
  );
};

export default ProductPage;
