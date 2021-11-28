import React, { useEffect } from 'react';
import { useParams } from 'react-router';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { fetchClothingProducts } from '../../redux/products/productsActions';

// STYLES
import { PageGrid } from '../../general.styles';
import {
  LeftColumn,
  HeroSubtitleUp,
  HeroTitle,
  HeroSubtitleDown,
} from '../../hero.styles';

import {
  RightColumnResponsive,
  HeroImageResponsive,
  WavesResponsive,
} from '../../category-page.styles';

import { Hero } from './clothing.styles';

// IMAGES
import waves from '../../dev-images/waves2.svg';
import cup from './cup.png';
import Products from '../../components/products/products.component';

const ClothingPage = () => {
  // -------------------- STATE AND CONSTANTS -------------------
  const { category, for: forW } = useParams();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  // -------------------- USE EFFECT'S -------------------
  useEffect(() => {
    dispatch(fetchClothingProducts(category, forW, 10));
    return () => {};
  }, [dispatch, category, forW]);

  return (
    <PageGrid
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      {/* ---------------------------- HERO ---------------------- */}
      <Hero>
        <LeftColumn>
          <HeroSubtitleUp
            style={{ color: '#fff', textTransform: 'capitalize' }}
            className='animate__animated animate__fadeInDown'
          >
            {`${category}s`}
          </HeroSubtitleUp>
          <HeroTitle
            style={{ color: '#fff', textTransform: 'capitalize' }}
            className='animate__animated animate__fadeIn animate__delay-1s'
          >
            {forW}
          </HeroTitle>
          <HeroSubtitleDown
            style={{ color: '#fff' }}
            className='animate__animated animate__fadeInUp animate__delay-2s'
          >
            Proximamente Agendas Personalizadas
          </HeroSubtitleDown>
        </LeftColumn>

        <RightColumnResponsive>
          <WavesResponsive src={waves} />
          <HeroImageResponsive
            src={cup}
            className='animate__animated animate__fadeIn animate__delay-3s'
          />
        </RightColumnResponsive>
      </Hero>
      <Products products={products} />
    </PageGrid>
  );
};

export default ClothingPage;
