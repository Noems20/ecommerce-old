import React, { useEffect } from 'react';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/products/productsActions';

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

import { Hero } from './diaries.styles';

// IMAGES
import waves from '../../dev-images/waves2.svg';
import cup from './cup.png';
import Products from '../../components/products/products.component';

const GiftsPage = () => {
  // -------------------- STATE AND CONSTANTS -------------------
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
    dispatch(fetchProducts('agendas', 12));
    return () => {};
  }, [dispatch]);

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
            style={{ color: '#fff' }}
            className='animate__animated animate__fadeInDown'
          >
            La mejor relación calidad-precio
          </HeroSubtitleUp>
          <HeroTitle
            style={{ color: '#fff' }}
            className='animate__animated animate__fadeIn animate__delay-1s'
          >
            Regalos
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

export default GiftsPage;
