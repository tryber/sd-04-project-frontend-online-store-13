import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import DetailsPage from './pages/DetailsPage';
import MainPage from './pages/MainPage';
import CartPage from './pages/ShoppingCartPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>        
        <Route path="/product/:id" component={DetailsPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={Checkout} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
