import Header from './component/Header';
import Home from './component/Home';
import CheckoutPage from './pages/CheckoutPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




import './App.css';
import Login from './component/Login';


function App() {
  return (

    <Router>

      <Switch>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/checkout'>
          <Header />
          <CheckoutPage />
        </Route>

        <Route path='/'>
          <Header />
          <Home />
        </Route>

      </Switch>

    </Router>


  );
}

export default App;
