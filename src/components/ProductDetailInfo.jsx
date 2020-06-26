import { Link } from 'react-router-dom';
import React from 'react';

import CardButton from '../components/CartButton';

class ProductDetailInfo extends React.Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { price, thumbnail, title } = this.props.product;
    // eslint-disable-next-line react/destructuring-assignment
    const availableQuantity = this.props.product.available_quantity;
    return (
      <div>
        <div>
          <h2 data-testid="product-detail-name">{title}</h2>
          <img src={thumbnail} alt={title} />
          <p>{`Preço: $${price}`}</p>
          <p>{`Quantidade Disponível: ${availableQuantity}`}</p>
          <p>Informações Adicionais: </p>
          <CardButton />
        </div>
      </div>
    );
  }
}

export default ProductDetailInfo;
