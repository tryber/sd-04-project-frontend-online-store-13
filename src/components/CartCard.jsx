import React, { Component } from 'react';

class CartCard extends Component {
  render() {
    const { title, thumbnail, price, installments : { quantity } } = product;
    return (
      <div>
        <img src={thumbnail} alt={title} />
        <h6> R$ {price} </h6>
        <h5 data-testid="shopping-cart-product-name"> {title} </h5>
        <h6 data-testid="shopping-cart-product-quantity"> {quantity} </h6>
      </div>
    )
  }
}

export default CartCard;
