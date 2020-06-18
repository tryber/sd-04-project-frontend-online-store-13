import React, { Component } from "react";

import { getProductsFromCategoryAndQuery } from "../services/api";
import Search from "../components/Search";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      results: null,
      categoryId: null,
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
      </div>
    );
  }
}

export default ProductList;
