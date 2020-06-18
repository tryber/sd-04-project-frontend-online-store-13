import React from 'react';
import ProductDetailInfo from '../components/products/ProductDetailInfo';
import * as api from '../services/api';


class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: '' };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const searchId = this.props.match.params.id;
    api.getItemForId(searchId).then((result) => this.setState({ product: result }));
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <ProductDetailInfo product={product} />
      </div>
    );
  }
}

export default ProductDetails;
