import React, { Component } from 'react';

import ProductCard from '../components/ProductCard';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap align-items-center">
            {!products && <p>Nenhum produto foi encontrado</p>}
            <div className="container">
              <div className="row">
                {products &&
                  products.map((product) => (
                    <div key={product.id}>
                      <ProductCard product={product} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default ProductList;
