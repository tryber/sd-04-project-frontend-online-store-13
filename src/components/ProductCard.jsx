import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm border border-success" style={{ width: '15rem' }} >
            <img src={thumbnail} alt={title} className="rounded mx-auto d-block" />
            <div className="card-body">
              <h6 className="card-title"> R$ {price} - {title} </h6>
            </div>
            <div className="card-footer">
              <button>Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default ProductCard;
