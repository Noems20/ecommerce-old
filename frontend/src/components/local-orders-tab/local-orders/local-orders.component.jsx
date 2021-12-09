import React, { useEffect, useState } from 'react';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, clearOrders } from '../../../redux/orders/ordersActions';

// COMPONENTS
import LocalOrderCard from '../local-order-card/local-order-card.component';

// STYLES
import { Container, Content, PaginationModified } from './local-orders.styles';
import { LoaderModified } from '../../../general.styles';

const LocalOrders = ({ active }) => {
  // ------------------------------ STATE AND CONSTANTS --------------------
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { orders, pages } = useSelector((state) => state.orders);
  const {
    loading: { fetchLoader },
  } = useSelector((state) => state.ui);

  // ---------------------------- USE EFFECTs --------------------------
  useEffect(() => {
    dispatch(fetchOrders(active, 9, page));
    return () => {
      dispatch(clearOrders());
    };
  }, [dispatch, active, page]);

  // -------------------------- HANDLERS ---------------------------

  return (
    <>
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
        <PaginationModified page={page} numOfPages={pages} setPage={setPage} />
      </Container>
    </>
  );
};

export default LocalOrders;
