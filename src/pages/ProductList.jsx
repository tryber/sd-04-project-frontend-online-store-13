import React from 'react';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>Categorias:</h3>
        </div>
        <div data-testid="home-initial-message">
          <h1>Digite algum termo de pesquisa ou escolha uma categoria.</h1>
        </div>
      </div>
    );
  }
}

export default ProductList;
