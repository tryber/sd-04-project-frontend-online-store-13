/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

class AddCartButton extends Component {

  constructor(props) {
    super(props);
    this.addSession = this.addSession.bind(this);
  }

  addSession(product) {
    if (!sessionStorage.carrinho) sessionStorage.carrinho = JSON.stringify([]);
    const carrinho = JSON.parse(sessionStorage.carrinho);
    const colocarList = [...carrinho, product];
    sessionStorage.carrinho = JSON.stringify(colocarList);
  }

  render() {
    return (
      <button
        data-testid="product-add-to-cart"
        onClick={() => this.addSession(this.props.product)}
      >
        add carrinho
      </button>
    );
  }
}

export default AddCartButton;
