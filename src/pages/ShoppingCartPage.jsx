import React, { Component } from 'react';

class ShoppingCartPage extends Component {
  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        <h1>Seu carrinho está vazio</h1>
      </div>
    );
  }
}

export default ShoppingCartPage;
