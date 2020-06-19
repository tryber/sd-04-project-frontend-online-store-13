import React, { Component } from "react";

import ProductCard from "../components/ProductCard";

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
