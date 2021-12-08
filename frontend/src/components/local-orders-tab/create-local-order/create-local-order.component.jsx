import React, { useState, useEffect, Fragment } from 'react';
import es from 'date-fns/locale/es';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import getHours from 'date-fns/getHours';
import getDay from 'date-fns/getDay';
import addDays from 'date-fns/addDays';
import { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { clearUiErrors } from '../../../redux/ui/uiActions';
import { createOrder } from '../../../redux/orders/ordersActions';

// COMPONENTS
import TextInput from '../../form-inputs/text-input/text-input.component';
import SelectInput from '../../form-inputs/select-input/select-input.component';
// import QuantityInput from '../../form-inputs/quantity-input/quantity-input.component';
import CustomButton from '../../custom-button/custom-button.component';
import AddCard from '../add-card/add-card.component';
import Calendar from '../../calendar/calendar.component';
import {
  CalendarContainer,
  CustomMonthHeader,
} from '../../calendar/calendar.components';

// STYLES
import { Title, Line } from '../tab-styles';
import {
  Container,
  Content,
  FormContainer,
  ProductRow,
  ProductPrice,
  ExtraRow,
} from './create-local-order.styles';

registerLocale('es', es);

const getAvailableDate = (date) => {
  if (getDay(date) === 0) {
    // Check if sunday
    return setHours(addDays(date, 1), 0);
  } else if (getDay(date) === 6) {
    // Check if saturday
    if (getHours(date) >= 11) return setHours(addDays(date, 1), 0);
  } else {
    if (getHours(date) >= 16) return setHours(addDays(date, 1), 0);
  }

  return date;
};

const CreateLocalOrderTab = ({ variants }) => {
  // ------------------------------------- STATE AND CONSTANTS ----------------------

  const dispatch = useDispatch();
  const {
    uiErrors: { errorsOne },
    loading,
  } = useSelector((state) => state.ui);

  const [selectedDate, setSelectedDate] = useState(
    getAvailableDate(new Date())
  );
  // console.log(selectedDate.toISOString());

  const [products, setProducts] = useState([
    {
      product: '',
      quantity: '0',
      price: '0',
      totalPrice: 0,
    },
  ]);

  const [userCredentials, setUserCredentials] = useState({
    clientName: '',
    clientEmail: '',
    clientCellphone: '',
    employeeName: '',
    description: '',
    percentage: '0',
    paid: '0',
    totalPrice: 0,
  });

  const {
    clientName,
    clientEmail,
    clientCellphone,
    employeeName,
    description,
    percentage,
    paid,
    totalPrice,
  } = userCredentials;

  // --------------------------------- USE EFFECTS -------------------------
  useEffect(() => {
    return () => {
      dispatch(clearUiErrors());
    };
  }, [dispatch]);

  // ---------------------------------- HANDLERS ----------------------------

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() + 120 * 60000 < selectedDate.getTime();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'percentage') {
      let newTotalPrice = products.reduce(
        (total, currentProduct) => total + currentProduct.totalPrice,
        0
      );

      newTotalPrice += Math.round(newTotalPrice * (value / 100) * 100) / 100;

      setUserCredentials({
        ...userCredentials,
        percentage: value,
        totalPrice: newTotalPrice,
      });
    } else {
      setUserCredentials({
        ...userCredentials,
        [name]: value,
      });
    }
  };

  const handleAddProduct = () => {
    setProducts([
      ...products,
      {
        product: '',
        quantity: '0',
        price: '0',
        totalPrice: 0,
      },
    ]);
  };

  const handleRemoveProduct = (index) => {
    const newProducts = products.slice();
    newProducts.splice(index, 1);
    setProducts(newProducts);

    let newTotalPrice = newProducts.reduce(
      (total, currentProduct) => total + currentProduct.totalPrice,
      0
    );

    setUserCredentials({
      ...userCredentials,
      totalPrice: newTotalPrice,
    });
  };

  const handleProductChange = (event, index) => {
    const { name, value } = event.target;
    const newProducts = products.slice(); //copy the array
    newProducts[index][name] = value;

    if (name === 'quantity' || name === 'price') {
      newProducts[index].totalPrice =
        Math.round(
          newProducts[index].price * newProducts[index].quantity * 100
        ) / 100;

      let newTotalPrice = newProducts.reduce(
        (total, currentProduct) => total + currentProduct.totalPrice,
        0
      );

      newTotalPrice +=
        Math.round(newTotalPrice * (percentage / 100) * 100) / 100;

      setUserCredentials({
        ...userCredentials,
        totalPrice: newTotalPrice,
      });
    }
    setProducts(newProducts); //set the new state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createOrder(
        clientName,
        clientCellphone,
        clientEmail,
        employeeName,
        description,
        totalPrice,
        paid,
        percentage,
        selectedDate,
        products
      )
    );
  };

  return (
    <Container
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Content>
        <FormContainer onSubmit={handleSubmit}>
          {/* ----------------------------- INFORMATION ------------------------- */}

          <Title>Información</Title>
          <TextInput
            name='clientName'
            type='text'
            handleChange={handleChange}
            value={clientName}
            label='Nombre de cliente'
            error={errorsOne.clientName}
          />
          <TextInput
            name='clientCellphone'
            type='text'
            handleChange={handleChange}
            value={clientCellphone}
            label='Teléfono de cliente'
            error={errorsOne.clientCellphone}
          />
          <TextInput
            name='clientEmail'
            type='text'
            handleChange={handleChange}
            value={clientEmail}
            label='Email de cliente'
            error={errorsOne.clientEmail}
          />
          <SelectInput
            label='Nombre de quien atiende'
            name='employeeName'
            onChange={handleChange}
            value={employeeName}
            error={errorsOne.employeeName}
          >
            <option key={0} value=''>
              Selecciona uno
            </option>
            <option key={1} value='Miguel Muñoz'>
              Miguel Muñoz
            </option>
            <option key={2} value='Maria'>
              Maria
            </option>
            <option key={3} value='Chuy'>
              Chuy
            </option>
            <option key={4} value='Miguel Antonio'>
              Miguel Antonio
            </option>
            <option key={5} value='Gael'>
              Gael
            </option>
            <option key={6} value='Jaciel'>
              Jaciel
            </option>
            <option key={7} value='Juanito'>
              Juan
            </option>
          </SelectInput>
          <TextInput
            textarea
            name='description'
            type='text'
            handleChange={handleChange}
            value={description}
            label='Descripción'
            error={errorsOne.description}
          />
          {/* ----------------------------- PRODUCTS ------------------------- */}
          <Title>Productos</Title>
          {products.map((product, index) => {
            return (
              <Fragment key={index}>
                <ProductRow>
                  <TextInput
                    name='product'
                    type='text'
                    handleChange={(event) => handleProductChange(event, index)}
                    value={product.product}
                    label='Producto'
                    error={errorsOne[`products.${index}.product`]}
                  />
                  <TextInput
                    name='quantity'
                    type='text'
                    handleChange={(event) => handleProductChange(event, index)}
                    value={product.quantity}
                    label='Cantidad'
                    error={errorsOne[`products.${index}.quantity`]}
                  />

                  <TextInput
                    name='price'
                    type='text'
                    handleChange={(event) => handleProductChange(event, index)}
                    value={product.price}
                    label='Precio'
                    error={errorsOne[`products.${index}.price`]}
                  />
                  <ProductPrice>{`Subtotal: $${product.totalPrice}`}</ProductPrice>
                  {index > 0 && (
                    <CustomButton
                      danger
                      type='button'
                      style={{ justifySelf: 'stretch' }}
                      onClick={() => handleRemoveProduct(index)}
                    >
                      Eliminar
                    </CustomButton>
                  )}
                </ProductRow>
                <Line style={{ margin: '0' }} />
              </Fragment>
            );
          })}
          <ExtraRow>
            <TextInput
              name='paid'
              type='text'
              handleChange={handleChange}
              value={paid}
              label='Anticipo'
              error={errorsOne.paid}
            />
            <TextInput
              name='percentage'
              type='text'
              handleChange={handleChange}
              value={percentage}
              label='Porcentaje añadido (%)'
              error={errorsOne.percentage}
            />
          </ExtraRow>
          <Title
            style={{ textAlign: 'center' }}
          >{`Total: $${totalPrice}`}</Title>
          <AddCard handler={handleAddProduct} />
          {/* ----------------------------- DELIVERY DATE ------------------------- */}
          <Title>Fecha de entrega</Title>
          <Calendar
            className='animate__animated animate__zoomIn'
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => {
              return CustomMonthHeader(
                date,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled
              );
            }}
            calendarContainer={CalendarContainer}
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            showTimeSelect
            locale='es'
            timeFormat='h:mm aaa'
            timeCaption={'Horario'}
            timeIntervals={30}
            minDate={
              getHours(new Date()) >= 16 ? addDays(new Date(), 1) : new Date()
            }
            maxDate={addDays(new Date(), 29)}
            minTime={
              getDay(selectedDate) !== 6
                ? setHours(setMinutes(new Date(), 30), 9)
                : setHours(setMinutes(new Date(), 30), 9)
            }
            maxTime={
              getDay(selectedDate) !== 6
                ? setHours(setMinutes(new Date(), 30), 18)
                : setHours(setMinutes(new Date(), 30), 13)
            }
            filterDate={(date) => date.getDay() !== 0}
            filterTime={filterPassedTime}
            dateFormat='MMMM d, yyyy h:mm aa'
            error={errorsOne.date}
          />

          <CustomButton
            primary
            loading={loading.firstLoader}
            disabled={loading.secondLoader || loading.firstLoader}
          >
            Crear orden
          </CustomButton>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default CreateLocalOrderTab;
