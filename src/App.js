import React from 'react';
import './App.css';
// import something from 'somewere'
// só pra commitar
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import emptyPage from './pages/CartPage';


function App() {
  return (
    <BrowserRouter>
      
      <Switch>
        <Route path="/" component={emptyPage} />
        <Route exact path="/cart" component={emptyPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
