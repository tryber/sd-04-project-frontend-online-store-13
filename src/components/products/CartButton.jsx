import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class CartButton extends Component {
  render() {
    return (
      <div data-testid="shopping-cart-button">
        <Link to="/cart" > Carrinho </Link>
      </div>
    );
  }
}

export default CartButton;
