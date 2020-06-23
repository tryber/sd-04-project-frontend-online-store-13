import React, { Component } from 'react';

class AddCartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCart: [],
    };
  }

  addProduto(product) {
    this.setState({ productCart: [...productCart, product] });
  }

  render() {
    const { product } = this.props;

    return (
      <div>
        <button onClick={() => this.addProduto(product)}>
          <Link data-testid="product-add-to-cart" to="/cart">
            {productCart}
          </Link>
        </button>
      </div>
    )
  }
}

export default AddCartButton;
