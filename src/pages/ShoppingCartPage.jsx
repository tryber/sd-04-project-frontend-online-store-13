import React, { Component } from 'react';


class shoppingCardPage extends Component {
  constructor(props) {
    super(props);
    this.state = { cartItem: [ ] };
  }
  componentDidMount() {
    if(!sessionStorage.carrinho) sessionStorage.carrinho = JSON.stringify([]);
    this.setState({
      cartItem: JSON.parse(sessionStorage.carrinho),
    })
  }
  render() {
    const { cartItem } = this.state;
    
      if( cartItem.length === 0 ) return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      )
      else {
        return (cartItem.map(element => (
          <div>
            <h6> R$ {element.price} </h6>
            <h5 data-testid="shopping-cart-product-name"> {element.title} </h5>
            <p data-testid="shopping-cart-product-quantity"> 1 </p>
          </div>
        )))
      }
  }
}

export default shoppingCardPage;
