import React from 'react';

// COMPONENTS
import Review from '../review/review.component';
import Rating from '../rating/rating.component';
import RatingBar from '../rating-bar/rating-bar.component';

// STYLES
import {
  ReviewsContainer,
  Title,
  ReviewsResumeContainer,
  ReviewsCount,
  RatingBarsContainer,
  Reviews,
  // NoReviewsTitle,
} from './product-reviews.styles';

const ProductReviews = () => {
  return (
    <ReviewsContainer>
      <ReviewsResumeContainer>
        <Title>Opiniones de clientes</Title>
        <Rating value={4.6} text='4.6 de 5'></Rating>
        <ReviewsCount>{'12,755'} calificaciones</ReviewsCount>
        <RatingBarsContainer>
          <RatingBar
            rating='5 estrellas'
            percentage='76%'
            onClick={() => console.log('5 estrellas')}
          />
          <RatingBar
            rating='4 estrellas'
            percentage='13%'
            onClick={() => console.log('4 estrellas')}
          />
          <RatingBar
            rating='3 estrellas'
            percentage='5%'
            onClick={() => console.log('3 estrellas')}
          />
          <RatingBar
            rating='2 estrellas'
            percentage='2%'
            onClick={() => console.log('2 estrellas')}
          />
          <RatingBar
            rating='1 estrellas'
            percentage='4%'
            onClick={() => console.log('1 estrellas')}
          />
        </RatingBarsContainer>
      </ReviewsResumeContainer>

      <Reviews>
        <Title>Reseñas</Title>
        {/* <NoReviewsTitle>SIN RESEÑAS</NoReviewsTitle> */}
        <Review />
        <Review />
        <Review />
        <Review />
      </Reviews>
    </ReviewsContainer>
  );
};

export default ProductReviews;
