import styled from 'styled-components';

export const ReviewContainer = styled.div`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 5px;
  overflow: hidden;
  background-color: #fff;
`;

// --------------------------------------------------------------
// REVIEW CONTENT
// --------------------------------------------------------------
export const ReviewContent = styled.div`
  margin: 2rem;

  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 0.2fr 1fr;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

// ---------------------------------
// PHOTO
// ---------------------------------

export const UserPhotoContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-auto-rows: max-content;
  justify-items: center;
`;

export const UserPhoto = styled.div`
  height: 10rem;
  width: 10rem;

  border-radius: 50%;
  border: 5px solid var(--color-primary);
  background-image: ${(props) => `url(${props.url})`};
  background-size: cover;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 8px 1px;
`;

export const UserName = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  text-align: center;
`;

// ---------------------------------
// REVIEW INFO
// ---------------------------------
export const ReviewInfo = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-auto-rows: max-content;

  @media only screen and (max-width: 600px) {
    justify-items: center;
    grid-gap: 1rem;
  }
`;

export const ReviewTitle = styled.h2`
  font-size: 1.8rem;
`;

export const ReviewDate = styled.p`
  font-size: 1.6rem;
  color: var(--color-grey-product);
`;

export const ReviewText = styled.p`
  font-size: 1.8rem;
`;

// --------------------------------------------------------------
// DECORATION
// --------------------------------------------------------------
export const Decoration = styled.div`
  height: 2rem;
  width: 70%;
  background-color: var(--color-primary);
`;
