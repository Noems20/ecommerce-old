import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';

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
          <Route path='/product/:id' component={Product} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
