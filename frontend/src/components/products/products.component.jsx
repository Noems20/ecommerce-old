import React, { useState } from 'react';

// COMPONENTS
import ProductCard from '../../components/product-card/product-card.component';
import Rating from '../../components/rating/rating.component';

// STYLES
import {
  Products,
  FilterTitle,
  FiltersContainer,
  Filter,
  FilterItem,
  RadioButton,
  ProductsGrid,
} from '../../category-page.styles';

const ProductsSection = ({ products }) => {
  const [orderBy, setOrderBy] = useState('rating');

  return (
    <Products>
      <FiltersContainer>
        <Filter>
          <FilterTitle>Opinión media de los clientes</FilterTitle>
          <FilterItem>
            <Rating value={4} /> o más
          </FilterItem>
          <FilterItem>
            <Rating value={3} /> o más
          </FilterItem>
          <FilterItem>
            <Rating value={2} /> o más
          </FilterItem>
          <FilterItem>
            <Rating value={1} /> o más
          </FilterItem>
        </Filter>
        <Filter>
          <FilterTitle>Precio</FilterTitle>
          <FilterItem>Hasta $300</FilterItem>
          <FilterItem>$300 a $400</FilterItem>
          <FilterItem>$500 y más</FilterItem>
        </Filter>
        <Filter>
          <FilterTitle>Ordenar por</FilterTitle>
          <FilterItem onClick={() => setOrderBy('priceAscending')}>
            <RadioButton
              className={orderBy === 'priceAscending' && 'selected'}
            />
            Precio: de más bajo a más alto
          </FilterItem>
          <FilterItem onClick={() => setOrderBy('priceDescending')}>
            <RadioButton
              className={orderBy === 'priceDescending' && 'selected'}
            />
            Precio: de más alto a más bajo
          </FilterItem>
          <FilterItem onClick={() => setOrderBy('rating')}>
            <RadioButton className={orderBy === 'rating' && 'selected'} />
            Opinión media de los clientes
          </FilterItem>
        </Filter>
      </FiltersContainer>
      <ProductsGrid>
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </ProductsGrid>
    </Products>
  );
};

export default ProductsSection;
