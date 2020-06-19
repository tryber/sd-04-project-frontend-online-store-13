import React, { Component } from "react";
import ProductList from "../components/ProductList";

class MainContent extends Component {
  render() {
    const { results, isLoading, notFound } = this.props;
    console.log(results)
    return (
      <div>
        {!isLoading && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
        <ProductList products={results} notFound={notFound}/> 
      </div>
    );
  }
}

export default MainContent; 
