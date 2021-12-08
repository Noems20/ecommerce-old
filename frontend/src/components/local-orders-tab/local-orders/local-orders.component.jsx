import React, { useEffect } from 'react';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, clearOrders } from '../../../redux/orders/ordersActions';

// COMPONENTS
import LocalOrderCard from '../local-order-card/local-order-card.component';

// STYLES
import { Container, Content } from './local-orders.styles';
import { LoaderModified } from '../../../general.styles';

const LocalOrders = ({ active }) => {
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

  // -------------------------- HANDLERS ---------------------------

  return (
    <Container>
      {fetchLoader ? (
        <LoaderModified />
      ) : (
        <Content>
          {orders.map((order) => {
            return <LocalOrderCard key={order._id} order={order} />;
          })}
        </Content>
      )}
    </Container>
  );
};

export default LocalOrders;
