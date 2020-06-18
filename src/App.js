import React from 'react';
import './App.css';
// import something from 'somewere'
// só pra commitar
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import emptyPage from './pages/CartPage';
import CartButton from './components/CartButton';

function App() {
  return (
    <BrowserRouter>
    <CartButton />
      <Switch>
        <Route exact path="/cart" component={emptyPage} />
      </Switch>
    </BrowserRouter>
      
  );
}

export default App;
