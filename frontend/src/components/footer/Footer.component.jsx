import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// STYLES
import {
  FooterContainer,
  ContentContainer,
  Item,
  ItemTitle,
  IconsContainer,
  List,
  ListItem,
  ListItemLink,
  WebsiteRights,
  StartContainer,
  TitleContainer,
  Title,
  ChecksContainer,
  Check,
  ButtonContainer,
  Button,
} from './footer.styles';

// ICONS
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaCaretDown,
} from 'react-icons/fa';
import { BsArrowRight, BsCheck2 } from 'react-icons/bs';

const Footer = () => {
  // -------------------------- STATE AND CONSTANTS
  const [open, setOpen] = useState({
    help: true,
    clothes: true,
    explore: true,
    about: true,
  });
  const [collapse, setCollapse] = useState(false);

  const containerVariants = {
    hidden: {
      height: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
    visible: {
      height: 'auto',
      transition: {
        ease: 'easeInOut',
      },
    },
  };

  // ------------------------- USE EFFECT ------------------------
  useEffect(() => {
    if (window.innerWidth > 447) {
      setOpen({
        help: true,
        clothes: true,
        explore: true,
        about: true,
      });
      setCollapse(false);
    } else {
      setOpen({
        help: false,
        clothes: false,
        explore: false,
        about: false,
      });
      setCollapse(true);
    }

    function handleResize() {
      if (window.innerWidth > 447) {
        setOpen({
          help: true,
          clothes: true,
          explore: true,
          about: true,
        });
        setCollapse(false);
      } else {
        setOpen({
          help: false,
          clothes: false,
          explore: false,
          about: false,
        });
        setCollapse(true);
      }
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <FooterContainer>
      <StartContainer>
        <TitleContainer>
          <Title>Prueba nuestro servicio hoy.</Title>
          <ChecksContainer>
            <Check>
              <BsCheck2 /> Calidad
            </Check>
            <Check>
              <BsCheck2 /> Rapidez
            </Check>
            <Check>
              <BsCheck2 /> Garantía
            </Check>
          </ChecksContainer>
        </TitleContainer>
        <ButtonContainer>
          <Button to='/registro' className='register'>
            <p> Registrate gratis</p> <BsArrowRight />
          </Button>
          <Button to='/contacto'>
            <p> Contáctanos</p> <BsArrowRight />
          </Button>
        </ButtonContainer>
      </StartContainer>
      <ContentContainer>
        <Item>
          <ItemTitle
            onClick={() => collapse && setOpen({ ...open, help: !open.help })}
          >
            ¿Necesitas ayuda? <FaCaretDown />
          </ItemTitle>
          <AnimatePresence>
            {open.help && (
              <List
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
              >
                <ListItem>
                  <ListItemLink to='/'>Estatus de orden</ListItemLink>
                </ListItem>
                <ListItem>
                  <ListItemLink to='/'>Envio</ListItemLink>
                </ListItem>
                <ListItem>
                  <ListItemLink to='/'>Contáctanos</ListItemLink>
                </ListItem>
                <ListItem>
                  <ListItemLink to='/'>Devoluciones</ListItemLink>
                </ListItem>
                <ListItem>
                  <ListItemLink to='/'>Centro de ayuda</ListItemLink>
                </ListItem>
                {/* <ListItem><ListItemLink to='/'>Terminos de venta</ListItemLink></ListItem> */}
              </List>
            )}
          </AnimatePresence>
        </Item>
        <Item>
          <ItemTitle
            onClick={() =>
              collapse && setOpen({ ...open, clothes: !open.clothes })
            }
          >
            Ropa <FaCaretDown />
          </ItemTitle>
          <AnimatePresence>
            {open.clothes && (
              <List
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
              >
                <ListItem>
                  <ListItemLink to='/ropa/general/todo'>General</ListItemLink>
                </ListItem>
                <ListItem>
                  <ListItemLink to='/ropa/hombre/todo'>Hombre</ListItemLink>
                </ListItem>
                <ListItem>
                  <ListItemLink to='/ropa/mujer/todo'>Mujer</ListItemLink>
                </ListItem>
                <ListItem>
                  <ListItemLink to='/ropa/niño/todo'>Niño</ListItemLink>
                </ListItem>
                <ListItem>
                  <ListItemLink to='/ropa/niña/todo'>Niña</ListItemLink>
                </ListItem>
              </List>
            )}
          </AnimatePresence>
        </Item>
        <Item>
          <ItemTitle
            onClick={() =>
              collapse && setOpen({ ...open, explore: !open.explore })
            }
          >
            Explorar <FaCaretDown />
          </ItemTitle>
          <AnimatePresence>
            {open.explore && (
              <List
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
              >
                <ListItem>
                  <ListItemLink to='/agendas'>Agendas</ListItemLink>
                </ListItem>
                {/* <ListItem>
                  <ListItemLink to='/'>Encuadernación</ListItemLink>
                </ListItem> */}
                <ListItem>
                  <ListItemLink to='/regalos'>Regalos</ListItemLink>
                </ListItem>
                <ListItem>
                  <ListItemLink to='/'>Nosotros</ListItemLink>
                </ListItem>
              </List>
            )}
          </AnimatePresence>
        </Item>
        <Item className='social'>
          <ItemTitle>Social</ItemTitle>
          <IconsContainer>
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
          </IconsContainer>
        </Item>
        <Item>
          <ItemTitle
            onClick={() => collapse && setOpen({ ...open, about: !open.about })}
          >
            Acerca de Copias Noé <FaCaretDown />
          </ItemTitle>
          <AnimatePresence>
            {open.about && (
              <List
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
              >
                <ListItem>
                  Empresa 100% Zacatecana con más de 20 años de experiencia en
                  el área de la Encuadernación y el Fotocopiado, comprometida
                  con brindar el mejor servicio y calidad a nuestros clientes en
                  lo que respecta a la Impresión Digital, Reproducción y
                  Encuadernación de Tesis, Libros, Antologías, y mucho más.
                </ListItem>
              </List>
            )}
          </AnimatePresence>
        </Item>
      </ContentContainer>
      <WebsiteRights>
        Copias y Encuadernaciones Noé &copy; {new Date().getFullYear()} Todos
        los derechos reservados.
      </WebsiteRights>
    </FooterContainer>
  );
};

export default Footer;
