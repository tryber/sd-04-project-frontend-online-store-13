import React from 'react';
import Categories from '../components/products/Categories';
import Product from '../components/products/Product';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: '' };
  }

  render() {
    const { products } = this.state;
    if (products === '') {
      return (
        <div>
          <aside>
            <Categories />
          </aside>
          <div data-testid="home-initial-message">
            <h1>Digite algum termo de pesquisa ou escolha uma categoria.</h1>
          </div>
        </div>
      );
    }
    return (
      <div>
        <aside>
          <Categories />
        </aside>
        <div>
          {products.map((e) => <Product product={e} />)}
        </div>
      </div>
    );
  }
}

export default ProductList;
