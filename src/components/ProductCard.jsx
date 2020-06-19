import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { title, thumbnail, price } = this.product;
    return (
      <div>
        <img src={thumbnail} alt={title} />
        <h6>R$ {price} - {title}</h6>
      </div>
    )
  }
}

export default ProductCard;
