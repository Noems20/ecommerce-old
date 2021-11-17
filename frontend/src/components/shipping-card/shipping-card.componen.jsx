import React from 'react';

// STYLES
import {
  Card,
  CardMenu,
  IconContainer,
  CardHeader,
  State,
  City,
  CardBody,
  TwoColumns,
  InfoContainer,
  InfoTitle,
  Info,
} from './shipping-card.styles';

// ICONS
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const ShippingCard = () => {
  return (
    <Card>
      <CardMenu>
        <IconContainer edit>
          <FaEdit />
        </IconContainer>
        <IconContainer>
          <FaTrashAlt />
        </IconContainer>
      </CardMenu>
      <CardHeader>
        <State>Zacatecas</State>
        <City>Guadalupe</City>
      </CardHeader>
      <CardBody>
        <TwoColumns>
          <InfoContainer>
            <InfoTitle>Colonia</InfoTitle>
            <Info>El salero</Info>
          </InfoContainer>
          <InfoContainer>
            <InfoTitle>Codigo postal</InfoTitle>
            <Info>98607</Info>
          </InfoContainer>
          <InfoContainer>
            <InfoTitle>Dirección</InfoTitle>
            <Info>Andador laurel 108A</Info>
          </InfoContainer>
          <InfoContainer>
            <InfoTitle>Teléfono</InfoTitle>
            <Info>(492) 134 7258</Info>
          </InfoContainer>
        </TwoColumns>
        <InfoContainer>
          <InfoTitle>Referencias</InfoTitle>
          <Info>
            Primer casa del andador laurel, color verde al lado de
            estacionamiento
          </Info>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Instrucciones de entrega</InfoTitle>
          <Info>Tocar tres veces y decir la contraseña 1122</Info>
        </InfoContainer>
      </CardBody>
    </Card>
  );
};

export default ShippingCard;
