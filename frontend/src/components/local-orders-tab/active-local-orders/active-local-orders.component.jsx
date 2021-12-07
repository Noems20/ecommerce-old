import React, { useEffect } from 'react';

// REDUX
import { useDispatch } from 'react-redux';
import { fetchOrders, clearOrders } from '../../../redux/orders/ordersActions';

// STYLES
import { Container } from './active-local-orders.styles';

const ActiveLocalOrders = ({ variants, active }) => {
  // ------------------------------ STATE AND CONSTANTS --------------------
  const dispatch = useDispatch();

  // ---------------------------- USE EFFECTs --------------------------
  useEffect(() => {
    dispatch(fetchOrders(active));
    return () => {
      dispatch(clearOrders());
    };
  }, [dispatch, active]);
  return (
    <Container
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      Hola
    </Container>
  );
};

export default ActiveLocalOrders;
