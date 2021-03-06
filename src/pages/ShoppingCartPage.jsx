import React, { Component } from 'react';

class ShoppingCardPage extends Component {
  constructor(props) {
    super(props);
    this.state = { cartItem: [] };

    this.atualizar = this.atualizar.bind(this);
  }

  componentDidMount() {
    if (!sessionStorage.carrinho) sessionStorage.carrinho = JSON.stringify([]);
    this.atualizar();
  }

  atualizar() {
    this.setState({ cartItem: JSON.parse(sessionStorage.carrinho) });
  }

  render() {
    const { cartItem } = this.state;

    return (
      <div>
        {cartItem.length === 0 && (
          <div data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </div>
        )}
        {cartItem.length > 0 &&
          cartItem.map((element) => (
            <div key={element.title}>
              <h6> R$ {element.price} </h6>
              <h5 data-testid="shopping-cart-product-name">
                {element.title}
              </h5>
              <p data-testid="shopping-cart-product-quantity"> 1 </p>
            </div>
          ))}
      </div>
    );
  }
}

export default ShoppingCardPage;
