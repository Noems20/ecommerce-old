import { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { checkLogged } from './redux/user/userActions';

// PAGES
import Home from './pages/home/home.page';
import Cart from './pages/cart/cart.page';
import Login from './pages/login/login.page';
import Profile from './pages/profile/profile.page';
import Product from './pages/product/product.page';
import Register from './pages/register/register.page';
import Shipping from './pages/shipping/shipping.page';
import VerifyAccount from './pages/verify-account/verify-account.page';

// COMPONENTS
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import FullScreenLoader from './components/loaders/full-screen-loader/full-screen-loader.component';
import ChangePassword from './pages/change-password/change-password.page';

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
          <Route path='/producto' component={Product} />
          <Route
            exact
            path='/login'
            render={() => (user ? <Redirect to='/perfil' /> : <Login />)}
          />
          <Route
            exact
            path='/registro'
            render={() => (user ? <Redirect to='/' /> : <Register />)}
          />
          <Route
            exact
            path='/perfil'
            render={() => (user ? <Profile /> : <Redirect to='/login' />)}
          />
          <Route
            exact
            path='/envio'
            render={() => (user ? <Shipping /> : <Redirect to='/login' />)}
          />
          <Route
            exact
            path='/verificar-cuenta/:token'
            render={() =>
              user ? <Redirect to='/perfil' /> : <VerifyAccount />
            }
          />
          <Route
            exact
            path='/restablecer-contraseña/:token'
            render={() =>
              user ? <Redirect to='/perfil' /> : <ChangePassword />
            }
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
