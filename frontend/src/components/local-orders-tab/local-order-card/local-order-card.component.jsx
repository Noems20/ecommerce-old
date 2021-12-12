import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
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
import { Alert } from '../../../general.styles';

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
  TwoColumnsTitle,
  TwoColumnsPayment,
  ExpandButton,
  BackgroundLogo,
} from './local-order-card.styles';

// ICONS
import { IoExpandSharp } from 'react-icons/io5';

// IMAGES
import logo from './logo.png';

const LocalOrderCard = ({ order }) => {
  // ---------------------------- STATE AND CONSTANTS -------------------
  const [completeLoader, setCompleteLoader] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  // -------------------------- HANDLERS ---------------------------
  const getColor = () => {
    let deliveryDate = moment(order.date);
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

  const handleComplete = (active) => {
    setCompleteLoader(true);
    dispatch(setActiveOrder(order._id, active));
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
      <DecorationCard color={getColor()}>
        <CardContent>
          <TwoColumnsTitle>
            <CardTitle>{order.clientName}</CardTitle>
            <ExpandButton onClick={() => setOpen('expand')}>
              <IoExpandSharp />
            </ExpandButton>
          </TwoColumnsTitle>
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
            <CardSubtitle>Se encargó el</CardSubtitle>
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
          <TwoColumnsPayment>
            <ItemContainer>
              <CardSubtitle>Total</CardSubtitle>
              <CardText>{`$${order.totalPrice}`}</CardText>
            </ItemContainer>
            <ItemContainer>
              <CardSubtitle>Porcentaje añadido</CardSubtitle>
              <CardText>{`${order.percentage}%`}</CardText>
            </ItemContainer>
            <ItemContainer>
              <CardSubtitle>Pagado</CardSubtitle>
              <CardText>{`$${order.paid}`}</CardText>
            </ItemContainer>
            <ItemContainer>
              <CardSubtitle>Por pagar</CardSubtitle>
              <CardText>{`$${
                Math.round(
                  (order.totalPrice - order.paid + Number.EPSILON) * 100
                ) / 100
              }`}</CardText>
            </ItemContainer>
          </TwoColumnsPayment>
          <ButtonsContainer>
            {order.active ? (
              <>
                <CustomButton
                  primary={1}
                  as={Link}
                  to={`/ordenes-locales/editar/${order._id}`}
                  target='_blank'
                >
                  Editar
                </CustomButton>
                <CustomButton
                  success
                  onClick={() => handleComplete(false)}
                  loading={completeLoader}
                  disabled={completeLoader}
                >
                  Completar
                </CustomButton>
              </>
            ) : (
              <>
                <CustomButton
                  primary
                  onClick={() => handleComplete(true)}
                  loading={completeLoader}
                  disabled={completeLoader}
                >
                  Activar
                </CustomButton>
                <CustomButton danger onClick={() => setOpen('delete')}>
                  Eliminar
                </CustomButton>
              </>
            )}
          </ButtonsContainer>
        </CardContent>
      </DecorationCard>
      {/* ------------------------------- MODALS ------------------------------------------------- */}
      <AnimatePresence>
        {open === 'delete' && (
          <Modal handleClose={handleClose}>
            <Alert
              title='Cuidado'
              text={`¿Seguro que deseas eliminar la orden de ${order.clientName}?`}
              button='Continuar'
              type='danger'
              handleClose={handleClose}
              handleAction={handleDelete}
            />
          </Modal>
        )}
        {open === 'expand' && (
          <Modal handleClose={handleClose}>
            <DecorationCard color={getColor()}>
              <BackgroundLogo src={logo} />
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
                  <ItemContainer>
                    <CardSubtitle>Se encargó el</CardSubtitle>
                    <CardText>
                      {moment(order.createdAt).format('LLLL')}
                    </CardText>
                  </ItemContainer>
                </TwoColumns>

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
                <TwoColumnsPayment>
                  <ItemContainer>
                    <CardSubtitle>Total</CardSubtitle>
                    <CardText>{`$${order.totalPrice}`}</CardText>
                  </ItemContainer>
                  <ItemContainer>
                    <CardSubtitle>Porcentaje añadido</CardSubtitle>
                    <CardText>{`${order.percentage}%`}</CardText>
                  </ItemContainer>
                  <ItemContainer>
                    <CardSubtitle>Pagado</CardSubtitle>
                    <CardText>{`$${order.paid}`}</CardText>
                  </ItemContainer>
                  <ItemContainer>
                    <CardSubtitle>Por pagar</CardSubtitle>
                    <CardText>{`$${
                      Math.round(
                        (order.totalPrice - order.paid + Number.EPSILON) * 100
                      ) / 100
                    }`}</CardText>
                  </ItemContainer>
                </TwoColumnsPayment>
              </CardContent>
            </DecorationCard>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default LocalOrderCard;
