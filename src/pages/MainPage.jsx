import React from 'react';
import Categories from '../components/products/Categories';
import Product from '../components/products/Product';
import * as api from '../services/api';


class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: '',
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((results) => this.setState({ categories: results }));
  }

  render() {
    const { products, categories } = this.state;

    if (products === '') {
      return (
        <div>
          <aside>
            <Categories categories={categories} />
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
          <Categories categories={categories} />
        </aside>
        <div>
          {products.map((e) => <Product product={e} />)}
        </div>
      </div>
    );
  }
}

export default ProductList;
