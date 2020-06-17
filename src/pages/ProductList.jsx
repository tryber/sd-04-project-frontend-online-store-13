import React from 'react';
// import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  consructor(props) {
    super(props);
    this.state = { products: '' };
  }

  render() {
    const { products } = this.state;
    if (products === '') {
      return (
        <>
          <div>
            <h3>Categorias:</h3>
          </div>
          <div data-testid="home-initial-message">
            <h1>Digite algum termo de pesquisa ou escolha uma categoria</h1>;
          </div>
        </>
      );
    }
    return <h1>Refazer pois deu errado</h1>
  }
}

export default ProductList;
