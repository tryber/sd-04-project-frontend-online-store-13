import React from 'react';
import ProductDetailInfo from '../components/ProductDetailInfo';
import Rating from '../components/Rating';

class ProductDetailsPage extends React.Component {
  render() {
    const { product } = this.props.location.state;
    return (
      <div>
        <ProductDetailInfo product={product} />
        <Rating />
      </div>
    );
  }
}

export default ProductDetailsPage;
