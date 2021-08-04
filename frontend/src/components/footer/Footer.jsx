import React from 'react';
import {
  FooterContainer,
  ContentContainer,
  Item,
  ItemTitle,
  IconsContainer,
  List,
  ListItem,
  WebsiteRights,
} from './Footer.styles';

import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <Item>
          <ItemTitle>¿Necesitas ayuda?</ItemTitle>
          <List>
            <ListItem>Estatus de orden</ListItem>
            <ListItem>Envio</ListItem>
            <ListItem>Contactanos</ListItem>
            <ListItem>Devoluciones</ListItem>
            <ListItem>Centro de ayuda</ListItem>
            <ListItem>Terminos de venta</ListItem>
          </List>
        </Item>
        <Item>
          <ItemTitle>Catalogo</ItemTitle>
          <List>
            <ListItem>Estatus de orden</ListItem>
            <ListItem>Envio</ListItem>
            <ListItem>Contactanos</ListItem>
            <ListItem>Devoluciones</ListItem>
            <ListItem>Centro de ayuda</ListItem>
            <ListItem>Terminos de venta</ListItem>
          </List>
        </Item>
        <Item>
          <ItemTitle>Explorar</ItemTitle>
          <List>
            <ListItem>Estatus de orden</ListItem>
            <ListItem>Envio</ListItem>
            <ListItem>Contactanos</ListItem>
            <ListItem>Devoluciones</ListItem>
            <ListItem>Centro de ayuda</ListItem>
            <ListItem>Terminos de venta</ListItem>
          </List>
        </Item>
        <Item>
          <ItemTitle>Siguenos</ItemTitle>
          <IconsContainer>
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
          </IconsContainer>
        </Item>
        <Item>
          <ItemTitle>Acerca de Tres Castillos</ItemTitle>
          <List>
            <ListItem>
              BOXHILL's expertly curated selection of modern outdoor furniture
              combines quality craftsmanship with thoughtful design. Explore our
              inspired collection of outdoor design, pool furniture, and covered
              patio accessories, ranging from fire pits and dining tables to
              outdoor pillows, planters, decor and more.
            </ListItem>
          </List>
        </Item>
      </ContentContainer>
      <WebsiteRights>
        Muebleria Tres Castillos &copy; {new Date().getFullYear()} Todos los
        derechos reservados.
      </WebsiteRights>
    </FooterContainer>
  );
};

export default Footer;
