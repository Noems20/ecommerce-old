import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';

// Components
import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/producto/:id' component={Product} />
          <Route path='/carrito' component={Cart} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
