import React from 'react';
import ProductDetailInfo from '../components/ProductDetailInfo';

class ProductDetailsPage extends React.Component {
  render() {
    const { product } = this.props.location.state;
    return (
      <div>
        <ProductDetailInfo product={product} />
      </div>
    );
  }
}

export default ProductDetailsPage;
