import { Switch, Route } from 'react-router-dom';

// REDUX

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
// import FullScreenLoader from './components/loaders/full-screen-loader/full-screen-loader.component';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/carrito' component={Cart} />
        <Route path='/producto/:id' component={Product} />
        <Route
          exact
          path='/login'
          component={Login}
          // render={() => (userInfo ? <Redirect to={redirect} /> : <Login />)}
        />
        <Route
          exact
          path='/registro'
          component={Register}
          // render={() => (userInfo ? <Redirect to='/' /> : <Register />)}
        />
        <Route
          exact
          path='/perfil'
          component={Profile}
          // render={() => (userInfo ? <Profile /> : <Redirect to='/login' />)}
        />
        <Route
          exact
          path='/envio'
          component={Shipping}
          // render={() => (userInfo ? <Shipping /> : <Redirect to='/login' />)}
        />
      </Switch>
      {/* <FullScreenLoader /> */}
      <Footer />
    </>
  );
};

export default App;
