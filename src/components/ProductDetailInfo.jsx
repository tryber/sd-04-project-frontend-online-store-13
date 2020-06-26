import React from 'react';

import CardButton from '../components/CartButton';

class ProductDetailInfo extends React.Component {
  render() {
    const { price, thumbnail, title } = this.props.product;
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
