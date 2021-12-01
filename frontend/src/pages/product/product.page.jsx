import React, { useEffect } from 'react';
import { useParams } from 'react-router';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductBySlug,
  clearProducts,
} from '../../redux/products/productsActions';

// COMPONENTS
import Product from '../../components/product/product.component';
import ProductReviews from '../../components/product-reviews/product-reviews.component';
import ProductSuggestions from '../../components/product-suggestions/product-suggestions.component';
import FullScreenLoader from '../../components/loaders/full-screen-loader/full-screen-loader.component';

// STYLES
import { PageGrid } from '../../general.styles';
import { Line } from './product.page.styles';

// IMAGENES
const ProductPage = () => {
  // --------------------------------- STATE AND CONSTANTS ----------------------------
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { product, productLoaded } = useSelector((state) => state.products);

  // ------------------------------ USE EFFECT'S --------------------------------
  useEffect(() => {
    dispatch(fetchProductBySlug(slug));
    return () => {
      dispatch(clearProducts());
    };
  }, [dispatch, slug]);

  // --------------------------------- HANDLERS -------------------------

  return (
    <>
      {productLoaded === false ? (
        <FullScreenLoader />
      ) : (
        <PageGrid>
          <>
            <Product product={product} />
            <Line />
            <ProductSuggestions catalog={product.catalog} id={product._id} />
            <Line />
            <ProductReviews
              productId={product._id}
              reviewsQuantity={product.ratingsQuantity}
              ratingsAverage={product.ratingsAverage}
            />
          </>
        </PageGrid>
      )}
    </>
  );
};

export default ProductPage;
