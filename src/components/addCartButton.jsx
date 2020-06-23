import React, { Component } from 'react';

class CartButton extends Component {
  constructor(props) {
    super(props);
    this.ola = this.ola.bind(this);
  }

  ola(click) {
    if (!sessionStorage.carrinho) sessionStorage.carrinho = JSON.stringify([]);
    const carrinho = JSON.parse(sessionStorage.carrinho);
    const colocarList = [...carrinho, click];
    sessionStorage.carrinho = JSON.stringify(colocarList);
  }

  render() {
    return (
      <button
        data-testid="product-add-to-cart"
        onClick={() => this.ola(this.props.product)}
      >
        add carrinho
      </button>
    );
  }
}

export default CartButton;
