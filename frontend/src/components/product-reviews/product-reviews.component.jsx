import React, { useState, useEffect } from 'react';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { createProductReview } from '../../redux/products/productsActions';
import { clearUiErrors } from '../../redux/ui/uiActions';

// COMPONENTS
import Review from '../review/review.component';
import Rating from '../rating/rating.component';
import RatingInteractive from '../rating/rating-interactive/rating-interactive.component';
import RatingBar from '../rating-bar/rating-bar.component';
import TextInput from '../form-inputs/text-input/text-input.component';
import CustomButton from '../custom-button/custom-button.component';

// STYLES
import {
  ReviewsContainer,
  Title,
  ReviewForm,
  ReviewsResumeContainer,
  ReviewsCount,
  RatingBarsContainer,
  Reviews,
  NoReviewsTitle,
} from './product-reviews.styles';

const ProductReviews = ({ reviews, product }) => {
  // ------------------------------- STATE AND CONSTANTS ------------------
  const [reviewData, setReviewData] = useState({
    title: '',
    review: '',
  });

  const [reviewRating, setReviewRating] = useState(5);

  const { title: reviewTitle, review } = reviewData;

  const dispatch = useDispatch();
  const { user, review: userReview } = useSelector((state) => state.user);
  const {
    loading,
    uiErrors: { errorsTwo },
  } = useSelector((state) => state.ui);

  // ------------------------------- USE EFFECT'S -------------------------
  useEffect(() => {
    return () => {
      dispatch(clearUiErrors());
    };
  }, [dispatch]);

  // ------------------------------- HANDLERS -------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;

    setReviewData({ ...reviewData, [name]: value });
  };

  const handleSubmitCreate = (e) => {
    e.preventDefault();
    dispatch(createProductReview(product, reviewTitle, reviewRating, review));
  };

  // ------------------------------- RENDER -------------------------------
  const reviewForm = (handleSubmit) => {
    return (
      <ReviewForm onSubmit={handleSubmit}>
        <RatingInteractive
          value={reviewRating}
          handleChange={setReviewRating}
          text={`${reviewRating} de 5`}
        />
        <TextInput
          name='title'
          type='text'
          handleChange={handleChange}
          value={reviewTitle}
          label='Titulo'
          error={errorsTwo.title}
        />
        <TextInput
          textarea
          rows={2}
          name='review'
          type='review'
          handleChange={handleChange}
          value={review}
          label='Reseña'
          error={errorsTwo.review}
        />
        <CustomButton
          primary
          type='submit'
          style={{ justifySelf: 'start' }}
          loading={loading.secondLoader}
          disabled={loading.secondLoader}
        >
          Crear reseña
        </CustomButton>
      </ReviewForm>
    );
  };

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
            rating='1 estrella'
            percentage='4%'
            onClick={() => console.log('1 estrella')}
          />
        </RatingBarsContainer>
      </ReviewsResumeContainer>

      <Reviews>
        {user && (
          <>
            <Title>{userReview ? 'Tu reseña' : 'Crear reseña'}</Title>

            {userReview ? (
              <Review key={userReview._id} review={userReview} />
            ) : (
              reviewForm(handleSubmitCreate)
            )}
          </>
        )}
        <Title>Reseñas</Title>
        {reviews.length === 0 ? (
          <NoReviewsTitle>SIN RESEÑAS</NoReviewsTitle>
        ) : (
          reviews.map((review) => {
            return <Review key={review._id} review={review} />;
          })
        )}
      </Reviews>
    </ReviewsContainer>
  );
};

export default ProductReviews;
