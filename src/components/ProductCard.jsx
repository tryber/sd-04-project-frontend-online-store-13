import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { title, thumbnail, price } = this.props.product;
    return (
      <div data-testid="product">
        <img src={thumbnail} alt={title} />
        <h6> R$ {price} </h6>
        <h5> {title} </h5>
      </div>
    )
  }
}

export default ProductCard;
