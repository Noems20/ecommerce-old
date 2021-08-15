import { Switch, Route, Redirect } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

// Pages
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';

// Components
import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component';

const App = () => {
  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  return (
    <>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/carrito' component={Cart} />
          <Route path='/producto/:id' component={Product} />
          <Route
            exact
            path='/login'
            render={() => (userInfo ? <Redirect to='/' /> : <Login />)}
          />
          <Route
            exact
            path='/registro'
            render={() => (userInfo ? <Redirect to='/' /> : <Register />)}
          />
          <Route
            exact
            path='/perfil'
            render={() => (userInfo ? <Profile /> : <Redirect to='/login' />)}
          />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
