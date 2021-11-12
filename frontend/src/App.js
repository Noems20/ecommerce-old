import { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { checkLogged } from './redux/user/userActions';

// PAGES
import Home from './pages/home/home.page';
import Product from './pages/product/product.page';
import Cart from './pages/cart/cart.page';
import Login from './pages/login/login.page';
import Register from './pages/register/register.page';
import Profile from './pages/profile/profile.page';
import Shipping from './pages/shipping/shipping.page';

// COMPONENTS
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import FullScreenLoader from './components/loaders/full-screen-loader/full-screen-loader.component';

const App = () => {
  // const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const { user, userLoaded } = userData;

  useEffect(() => {
    dispatch(checkLogged());
  }, [dispatch]);

  useEffect(() => {
    const unlisten = history.listen(() => {
      dispatch(checkLogged());
    });
    return function cleanup() {
      unlisten();
    };
  }, [dispatch, history]);

  return (
    <>
      <Header />
      {userLoaded.general ? (
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/carrito' component={Cart} />
          <Route path='/producto/:id' component={Product} />
          <Route
            exact
            path='/login'
            // component={Login}
            render={() => (user ? <Redirect to='/perfil' /> : <Login />)}
          />
          <Route
            exact
            path='/registro'
            // component={Register}
            render={() => (user ? <Redirect to='/' /> : <Register />)}
          />
          <Route
            exact
            path='/perfil'
            // component={Profile}
            render={() => (user ? <Profile /> : <Redirect to='/login' />)}
          />
          <Route
            exact
            path='/envio'
            // component={Shipping}
            render={() => (user ? <Shipping /> : <Redirect to='/login' />)}
          />
        </Switch>
      ) : (
        <FullScreenLoader />
      )}
      <Footer />
    </>
  );
};

export default App;
