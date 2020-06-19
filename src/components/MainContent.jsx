import React, { Component } from "react";
import ProductList from "../pages/MainPage";

class MainContent extends Component {
  render() {
    const { results, isLoading } = this.props;

    return (
      <div>
        {!isLoading && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}

        <ProductList products={results}/>
      </div>
    );
  }
}
