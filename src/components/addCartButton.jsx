import React, { Component } from 'react';

class CartButton extends Component {
  constructor(props) {
    super(props);
    this.addSession = this.addSession.bind(this);
  }

  static addSession(product) {
    if (!sessionStorage.carrinho) sessionStorage.carrinho = JSON.stringify([]);
    const carrinho = JSON.parse(sessionStorage.carrinho);
    const colocarList = [...carrinho, product];
    sessionStorage.carrinho = JSON.stringify(colocarList);
  }

  render() {
    const { product } = this.props;
    return (
      <button
        data-testid="product-add-to-cart"
        onClick={() => this.addSession(product)}
      >
        add carrinho
      </button>
    );
  }
}

export default CartButton;
