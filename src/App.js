import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CheckoutPage from './pages/Checkout';
import ProductDetailsPage from './pages/ProductDetails';
import MainPage from './pages/MainPage';
import ShoppingCartPage from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/product/:id" component={ProductDetailsPage} />
        <Route path="/cart" component={ShoppingCartPage} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
