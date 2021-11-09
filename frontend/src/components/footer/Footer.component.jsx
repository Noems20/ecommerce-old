import React from 'react';
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

import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { BsArrowRight, BsCheck2 } from 'react-icons/bs';

const Footer = () => {
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
          <ItemTitle>¿Necesitas ayuda?</ItemTitle>
          <List>
            <ListItem>
              <ListItemLink>Estatus de orden</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink>Envio</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink>Contáctanos</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink>Devoluciones</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink>Centro de ayuda</ListItemLink>
            </ListItem>
            {/* <ListItem><ListItemLink>Terminos de venta</ListItemLink></ListItem> */}
          </List>
        </Item>
        <Item>
          <ItemTitle>Ropa</ItemTitle>
          <List>
            <ListItem>
              <ListItemLink>General</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink>Hombre</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink>Mujer</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink>Niño</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink>Niña</ListItemLink>
            </ListItem>
          </List>
        </Item>
        <Item>
          <ItemTitle>Explorar</ItemTitle>
          <List>
            <ListItem>
              <ListItemLink>Agendas</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink>Encuadernación</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink>Regalos</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink>Nosotros</ListItemLink>
            </ListItem>
          </List>
        </Item>
        <Item>
          <ItemTitle>Social</ItemTitle>
          <IconsContainer>
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
          </IconsContainer>
        </Item>
        <Item>
          <ItemTitle>Acerca de Copias Noé</ItemTitle>
          <List>
            <ListItem>
              Empresa 100% Zacatecana con más de 20 años de experiencia en el
              área de la Encuadernación y el Fotocopiado, comprometida con
              brindar el mejor servicio y calidad a nuestros clientes en lo que
              respecta a la Impresión Digital, Reproducción y Encuadernación de
              Tesis, Libros, Antologías, y mucho más.
            </ListItem>
          </List>
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
