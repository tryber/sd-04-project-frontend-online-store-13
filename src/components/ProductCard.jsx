import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import AddCartButton from './AddCartButton';

class ProductCard extends Component {
  render() {
    const { product } = this.props;

    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm border border-success" style={{ width: '15rem' }} >
            <img src={thumbnail} alt={title} className="rounded mx-auto d-block" />
            <div className="card-body">
              <h6 className="card-title"> R$ {price} - {title} </h6>
              <Link to={{ pathname: `/product/${id}`, state: { product } }} data-testid="product-detail-link">Ver detalhes</Link>
            </div>
            <div className="card-footer">
              <AddCartButton product={this.props.product} testid="product-add-to-cart" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
