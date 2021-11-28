import React, { useEffect, useState } from 'react';

// REDUX
import { fetchProducts } from '../../redux/products/productsActions';
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS
import ProductCard from '../../components/product-card/product-card.component';

// STYLES
import { PageGrid } from '../../general.styles';
import {
  HeroSection,
  LeftColumn,
  RightColumn,
  HeroTitle,
  HeroSubtitleUp,
  HeroSubtitleDown,
  HeroButton,
  HeroImage,
  Waves,
} from '../../hero.styles';
import {
  CategoriesBar,
  BarItem,
  BarItemContent,
  BackgroundImageContainer,
  BarItemTitle,
  SubTitle,
  Line,
  Title,
  ButtonsContainer,
  CatalogButton,
  ProductsContainer,
  ProductsGrid,
  ServiceInfoContainer,
  ServiceInfoContent,
  ServiceInfoItem,
  ServiceInfoIconContainer,
  ServiceInfoTitle,
  ServiceInfoText,
} from './home.page.styles';

// ICONS
import { FaBox, FaTruck } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';

// IMAGENES

import waves from '../../dev-images/waves2.svg';
// import agenda from '../../dev-images/products/product-31-87253b.png';
import agenda2 from '../../dev-images/products/product-31-1e2e4a.png';
// import agenda3 from '../../dev-images/products/product-31-0e5e4f.png';
// import cup from '../../dev-images/products/product-5-fff.png';
// import cup2 from '../../dev-images/products/product-5-000.png';
// import cup3 from '../../dev-images/products/product-5-828282.png';
// import shirt from '../../dev-images/products/product-20-fff.png';
// import shirt2 from '../../dev-images/products/product-20-817f83.png';
// import shirt3 from '../../dev-images/products/product-20-000.png';
// import sweatShirt from '../../dev-images/products/product-30-fff.png';
// import sweatShirt2 from '../../dev-images/products/product-30-7e7e7e.png';
// import sweatShirt3 from '../../dev-images/products/product-30-000.png';

import scheduleBackground from './schedule.jpg';
import clothingBackground from './clothing.jpg';
import giftsBackground from './gifts.jpg';
import bindingBackground from './binding.jpg';

const Home = () => {
  // -------------------- STATE AND CONSTANTS -------------------
  const [selectedCatalog, setSelectedCatalog] = useState('regalos');

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
    dispatch(fetchProducts(selectedCatalog, 8));
    return () => {};
  }, [selectedCatalog, dispatch]);

  return (
    <PageGrid
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      {/* ---------------------------- HERO ---------------------- */}
      <HeroSection>
        <LeftColumn>
          <HeroSubtitleUp className='animate__animated animate__fadeInDown'>
            La mejor relación calidad-precio
          </HeroSubtitleUp>
          <HeroTitle className='animate__animated animate__fadeIn animate__delay-1s'>
            Agendas
          </HeroTitle>
          <HeroSubtitleDown className='animate__animated animate__fadeInUp animate__delay-2s'>
            Proximamente Agendas Personalizadas
          </HeroSubtitleDown>
          <HeroButton className='animate__animated animate__flipInY animate__delay-2s'>
            Explorar ahora
          </HeroButton>
        </LeftColumn>

        <RightColumn>
          <Waves src={waves} />
          <HeroImage
            src={agenda2}
            className='animate__animated animate__fadeIn animate__delay-3s'
          />
        </RightColumn>
      </HeroSection>
      {/* ---------------------------- CATEGORIES ---------------------- */}
      <CategoriesBar>
        <BarItem className='top' to='/encuadernacion'>
          <BarItemContent>
            <BarItemTitle>Encuadernación</BarItemTitle>
          </BarItemContent>
          <BackgroundImageContainer
            className='background-image'
            imageUrl={bindingBackground}
          />
        </BarItem>
        <BarItem to='/agendas'>
          <BarItemContent>
            <BarItemTitle>Agendas</BarItemTitle>
          </BarItemContent>
          <BackgroundImageContainer
            className='background-image'
            imageUrl={scheduleBackground}
          />
        </BarItem>
        <BarItem to='/ropa'>
          <BarItemContent>
            <BarItemTitle>Ropa</BarItemTitle>
          </BarItemContent>
          <BackgroundImageContainer
            className='background-image'
            imageUrl={clothingBackground}
          />
        </BarItem>
        <BarItem to='/regalos'>
          <BarItemContent>
            <BarItemTitle>Regalos</BarItemTitle>
          </BarItemContent>
          <BackgroundImageContainer
            className='background-image'
            imageUrl={giftsBackground}
          />
        </BarItem>
      </CategoriesBar>
      {/* ---------------------------- PRODUCTS ---------------------- */}
      <ProductsContainer>
        <SubTitle>Catálogo</SubTitle>
        <Line />
        <Title>Más vendidos</Title>
        <ButtonsContainer>
          <CatalogButton
            className={selectedCatalog === 'agendas' && 'active'}
            onClick={() => setSelectedCatalog('agendas')}
          >
            Agendas
          </CatalogButton>
          <CatalogButton
            className={selectedCatalog === 'ropa' && 'active'}
            onClick={() => setSelectedCatalog('ropa')}
          >
            Ropa
          </CatalogButton>
          <CatalogButton
            className={selectedCatalog === 'regalos' && 'active'}
            onClick={() => setSelectedCatalog('regalos')}
          >
            Regalos
          </CatalogButton>
        </ButtonsContainer>
        <ProductsGrid>
          {products.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
          {/* <ProductCard productImage={agenda} title='Agenda 2022' tag='AGEN' /> */}
        </ProductsGrid>
      </ProductsContainer>

      {/* ---------------------------- SERVICE INFO ---------------------- */}
      <ServiceInfoContainer>
        <SubTitle>Servicio</SubTitle>
        <Line />
        <Title>Características</Title>

        <ServiceInfoContent>
          <ServiceInfoItem>
            <ServiceInfoIconContainer>
              <FaBox />
            </ServiceInfoIconContainer>
            <ServiceInfoTitle>Sencillo sistema de ordenes</ServiceInfoTitle>
            <ServiceInfoText>
              Muy sencillo si la verdad me siento bien con hambre y ganas de ir
              por unas pizzas.
            </ServiceInfoText>
          </ServiceInfoItem>
          <ServiceInfoItem>
            <ServiceInfoIconContainer>
              <FaTruck />
            </ServiceInfoIconContainer>
            <ServiceInfoTitle>Entregas en tiempo</ServiceInfoTitle>
            <ServiceInfoText>
              Muy sencillo si la verdad me siento bien con hambre y ganas de ir
              por unas pizzas.
            </ServiceInfoText>
          </ServiceInfoItem>
          <ServiceInfoItem>
            <ServiceInfoIconContainer>
              <GiTakeMyMoney />
            </ServiceInfoIconContainer>
            <ServiceInfoTitle>Garantía de devolución del 100%</ServiceInfoTitle>
            <ServiceInfoText>
              Muy sencillo si la verdad me siento bien con hambre y ganas de ir
              por unas pizzas.
            </ServiceInfoText>
          </ServiceInfoItem>
        </ServiceInfoContent>
      </ServiceInfoContainer>
    </PageGrid>
  );
};

export default Home;
