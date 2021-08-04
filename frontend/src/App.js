import { Switch, Route } from 'react-router-dom';

// Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
