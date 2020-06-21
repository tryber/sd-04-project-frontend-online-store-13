import React, { Component } from "react";
import CartButton from "../components/CartButton";

class emptyPage extends Component {
  render() {
    return (
      <div>
        <CartButton />
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
      </div>
    );
  }
}

export default emptyPage;
