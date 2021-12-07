import React, { useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/es-us';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, clearOrders } from '../../../redux/orders/ordersActions';

// COMPONENTS
import DecorationCard from '../../decoration-card/decoration-card.component';
import CustomButton from '../../custom-button/custom-button.component';

// STYLES
import {
  Container,
  Content,
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
} from './active-local-orders.styles';
import { LoaderModified } from '../../../general.styles';

const ActiveLocalOrders = ({ active }) => {
  // ------------------------------ STATE AND CONSTANTS --------------------
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);
  const {
    loading: { fetchLoader },
  } = useSelector((state) => state.ui);

  // ---------------------------- USE EFFECTs --------------------------
  useEffect(() => {
    dispatch(fetchOrders(active));
    return () => {
      dispatch(clearOrders());
    };
  }, [dispatch, active]);

  return (
    <Container>
      {fetchLoader ? (
        <LoaderModified />
      ) : (
        <Content>
          {orders.map((order) => {
            return (
              <DecorationCard key={order._id}>
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
                      <CardSubtitle>Atendio</CardSubtitle>
                      <CardText>{order.employeeName}</CardText>
                    </ItemContainer>
                  </TwoColumns>
                  <ItemContainer>
                    <CardSubtitle>Se encargo el</CardSubtitle>
                    <CardText>
                      {moment(order.createdAt).format('LLLL')}
                    </CardText>
                  </ItemContainer>
                  <ItemContainer>
                    <CardSubtitle>Fecha de entrega</CardSubtitle>
                    <CardText>{moment(order.date).format('LLLL')}</CardText>
                  </ItemContainer>
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
                  <CardSubtitle
                    style={{ textAlign: 'center' }}
                  >{`Total: $${order.totalPrice}`}</CardSubtitle>
                  <ButtonsContainer>
                    <CustomButton primary>Editar</CustomButton>
                    <CustomButton success>Completar</CustomButton>
                    <CustomButton danger>Eliminar</CustomButton>
                  </ButtonsContainer>
                </CardContent>
              </DecorationCard>
            );
          })}
        </Content>
      )}
    </Container>
  );
};

export default ActiveLocalOrders;
