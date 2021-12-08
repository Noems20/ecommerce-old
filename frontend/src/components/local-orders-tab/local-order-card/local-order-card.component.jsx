import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import moment from 'moment';
import 'moment/locale/es-us';

// REDUX
import {
  deleteLocalOrder,
  setActiveOrder,
} from '../../../redux/orders/ordersActions';

// COMPONENTS
import CustomButton from '../../custom-button/custom-button.component';
import DecorationCard from '../../decoration-card/decoration-card.component';
import Modal from '../../modal/modal.component';
import Message from '../../messages/normal-message/normal-message.component';

// STYLES
import {
  CardContent,
  CardTitle,
  TwoColumns,
  ItemContainer,
  CardSubtitle,
  CardText,
  Table,
  TableRow,
  TableHeading,
  TableData,
  ButtonsContainer,
} from './local-order-card.styles';

const LocalOrderCard = ({ order }) => {
  // ---------------------------- STATE AND CONSTANTS -------------------
  const [completeLoader, setCompleteLoader] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  // -------------------------- HANDLERS ---------------------------
  const getColor = (date) => {
    let deliveryDate = moment(date);
    let currentDate = moment();
    let hoursDifference = deliveryDate.diff(currentDate, 'hours');

    if (hoursDifference <= 24) {
      return 'var(--color-red)';
    } else if (hoursDifference <= 48) {
      return 'yellow';
    } else {
      return 'var(--color-primary)';
    }
  };

  // ----------------------------------- HANDLERS ---------------------------

  const handleComplete = () => {
    setCompleteLoader(true);
    dispatch(setActiveOrder(order._id, false));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
    dispatch(deleteLocalOrder(order._id));
  };

  return (
    <>
      <DecorationCard color={() => getColor(order.date)}>
        <CardContent>
          <CardTitle>{order.clientName}</CardTitle>
          <TwoColumns>
            <ItemContainer>
              <CardSubtitle>Teléfono</CardSubtitle>
              <CardText>{order.clientCellphone}</CardText>
            </ItemContainer>
            <ItemContainer>
              <CardSubtitle>Email</CardSubtitle>
              <CardText>{order.clientEmail}</CardText>
            </ItemContainer>
            <ItemContainer>
              <CardSubtitle>Atendió</CardSubtitle>
              <CardText>{order.employeeName}</CardText>
            </ItemContainer>
          </TwoColumns>
          <ItemContainer>
            <CardSubtitle>Se encargo el</CardSubtitle>
            <CardText>{moment(order.createdAt).format('LLLL')}</CardText>
          </ItemContainer>
          <ItemContainer>
            <CardSubtitle>Fecha de entrega</CardSubtitle>
            <CardText>{moment(order.date).format('LLLL')}</CardText>
          </ItemContainer>
          {order.description && (
            <ItemContainer>
              <CardSubtitle>Descripción</CardSubtitle>
              <CardText>{order.description}</CardText>
            </ItemContainer>
          )}
          <CardTitle>Productos</CardTitle>
          <Table>
            <thead>
              <TableRow>
                <TableHeading>Producto</TableHeading>
                <TableHeading>Cantidad</TableHeading>
                <TableHeading>Precio</TableHeading>
                <TableHeading>Precio Total</TableHeading>
              </TableRow>
            </thead>
            <tbody>
              {order.products.map((product) => {
                return (
                  <TableRow key={product._id}>
                    <TableData>{product.product}</TableData>
                    <TableData>{product.quantity}</TableData>
                    <TableData>{`$${product.price}`}</TableData>
                    <TableData>{`$${product.totalPrice}`}</TableData>
                  </TableRow>
                );
              })}
            </tbody>
          </Table>
          {order.percentage !== 0 && (
            <CardSubtitle
              style={{ textAlign: 'center' }}
            >{`Porcentaje añadido: ${order.percentage}%`}</CardSubtitle>
          )}
          <CardSubtitle
            style={{ textAlign: 'center' }}
          >{`Total: $${order.totalPrice}`}</CardSubtitle>
          <CardSubtitle
            style={{ textAlign: 'center' }}
          >{`Pagado: $${order.paid}`}</CardSubtitle>
          <ButtonsContainer>
            {order.active ? (
              <>
                <CustomButton primary>Editar</CustomButton>
                <CustomButton
                  success
                  onClick={handleComplete}
                  loading={completeLoader}
                  disabled={completeLoader}
                >
                  Completar
                </CustomButton>
              </>
            ) : (
              <>
                <CustomButton primary>Activar</CustomButton>
                <CustomButton
                  danger
                  onClick={() => setOpen(true)}
                  loading={completeLoader}
                  disabled={completeLoader}
                >
                  Eliminar
                </CustomButton>
              </>
            )}
            {/* <CustomButton danger>Eliminar</CustomButton> */}
          </ButtonsContainer>
        </CardContent>
      </DecorationCard>
      <AnimatePresence>
        {open && (
          <Modal handleClose={handleClose}>
            <Message
              title='Cuidado'
              text={`¿Seguro que deseas eliminar la orden de ${order.clientName}?`}
              button='Continuar'
              type='danger'
              handleClose={handleClose}
              handleAction={handleDelete}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default LocalOrderCard;
