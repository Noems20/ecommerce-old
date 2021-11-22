import React from 'react';

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

// IMAGES
import userImage from './user-61904a6d2f56064132fa7bc7.jpg';

const Review = ({ children }) => {
  return (
    <ReviewContainer>
      <ReviewContent>
        <UserPhotoContainer>
          <UserPhoto url={userImage} />
          <UserName>Noé Muñoz Sánchez</UserName>
        </UserPhotoContainer>
        <ReviewInfo>
          <ReviewTitle>Tiene pelusas</ReviewTitle>
          <Rating value={4.5} text={'4.5 de 5'} />
          <ReviewDate>12 de Noviembre de 2021</ReviewDate>
          <ReviewText>
            Buena compra, mi pedido unicamente demoro 4 días en llegar. En
            general el paquete llego bien. Respecto a la fragancia sin duda se
            siente el DNA del Aventus Creed pero por el precio de 1/8 del mismo.
            Si como coleccionista de fragancias prefieres los aromas más densos
            (orientales, especiados, amaderados) compra Club de Nuit, si te
            gustan y usas más las fragancias tipo trasparenten (acuáticas,
            cítricas o frutales) sin duda ve por Aventus Creed.
          </ReviewText>
        </ReviewInfo>
      </ReviewContent>
      <Decoration />
    </ReviewContainer>
  );
};

export default Review;
