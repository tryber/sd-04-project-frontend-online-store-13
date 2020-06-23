import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import CartButton from './addCartButton';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <img src={thumbnail} alt={title} />
        <h6> R$ {price} </h6>
        <h5> {title} </h5>
        <Link to={{ pathname: `/product/${id}`, state: { product } }} data-testid="product-detail-link">Ver detalhes</Link>
        <CartButton product={this.props.product} />
      </div>
    );
  }
}

export default ProductCard;
