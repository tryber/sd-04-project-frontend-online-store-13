import React from 'react';

class Product extends React.Component {
  render() {
    const { product } = this.props;
    const { thumbnail, title, price } = product;
    return (
      <div data-testid="product">
        <div>
          <h3>{title}</h3>
          <img src={thumbnail} alt={title} />
          <p>{`Preço: ${price}`}</p>
        </div>
      </div>
    );
  }
}

export default Product;
