import React from 'react';
import moment from 'moment';
import 'moment/locale/es-us';

// COMPONENTS
import Rating from '../rating/rating.component';

// STYLES
import {
  ReviewContainer,
  ReviewContent,
  UserPhotoContainer,
  UserPhoto,
  UserName,
  ReviewInfo,
  ReviewTitle,
  ReviewDate,
  ReviewText,
  Decoration,
} from './review.styles';

const Review = ({ review }) => {
  return (
    <ReviewContainer>
      <ReviewContent>
        <UserPhotoContainer>
          <UserPhoto url={`/img/users/${review.user.photo}`} />
          <UserName>{review.user.name}</UserName>
        </UserPhotoContainer>
        <ReviewInfo>
          <ReviewTitle>Tiene pelusas</ReviewTitle>
          <Rating value={review.rating} text={`${review.rating} de 5`} />
          <ReviewDate>{moment(review.createdAt).format('LL')}</ReviewDate>
          <ReviewText>{review.review}</ReviewText>
        </ReviewInfo>
      </ReviewContent>
      <Decoration />
    </ReviewContainer>
  );
};

export default Review;
