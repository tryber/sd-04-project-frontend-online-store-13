import React from 'react';

import ProductDetailInfo from '../components/ProductDetailInfo';
import Rating from '../components/Rating';
import AddCartButton from '../components/AddCartButton';

class ProductDetailsPage extends React.Component {
  render() {
    const { product } = this.props.location.state;
    return (
      <div>
        <ProductDetailInfo product={product} />
        <Rating />
        <AddCartButton product={product} testid="product-detail-add-to-cart" />
      </div>
    );
  }
}

export default ProductDetailsPage;
