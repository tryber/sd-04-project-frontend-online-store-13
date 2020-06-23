import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img
            style={{ width: '25px', height: '20px' }}
            alt="shopping cart icon"
            src="https://cdn.onlinewebfonts.com/svg/img_290616.png"
          />
        </Link>
      </div>
    );
  }
}

export default CartButton;
