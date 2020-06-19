import React, { Component } from "react";

import { getProductsFromCategoryAndQuery } from "../services/api";
import Search from "../components/Search";
import MainContent from "../components/MainContent";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      results: null,
      categories: [],
      categoryId: null,
      notFound: false,
      isLoading: false,
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  onHandleChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  updateResults(categoryId, searchInput) {
    getProductsFromCategoryAndQuery(categoryId, searchInput).then(
      ({ results }) => {
        this.setState({
          results,
          isLoading: true,
        });
      }
    );
  }

  render() {
    const { searchInput, categoryId, results } = this.state;
    return (
      <div>
        <Search
          searchInput={searchInput}
          categoryId={categoryId}
          onHandleChange={this.onHandleChange}
          updateResults={this.updateResults}
        />
        <main>
          <MainContent
            results={results}
            isLoading={isLoading}
          />
        </main>
      </div>
    );
  }
}

export default ProductList;
