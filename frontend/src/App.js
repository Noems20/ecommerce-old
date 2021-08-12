import { Switch, Route, Redirect } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

// Pages
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

// Components
import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component';

const App = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/carrito' component={Cart} />
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
          <Route path='/producto/:id' component={Product} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
