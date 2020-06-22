/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

import * as api from '../services/api';

import Search from '../components/Search';
import MainContent from '../components/MainContent';
import Categories from '../components/Categories';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      results: null,
      categories: [],
      categoryId: null,
      isLoading: false,
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.updateResults = this.updateResults.bind(this);
    this.onHandleRadio = this.onHandleRadio.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => this.setState({ categories }));
  }

  onHandleRadio(categoryId, searchInput) {
    this.setState({ categoryId }, this.updateResults(categoryId, searchInput));
  }

  onHandleChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  updateResults(categoryId, searchInput) {
    api
      .getProductsFromCategoryAndQuery(categoryId, searchInput)
      .then(({ results }) => {
        this.setState({
          results,
          isLoading: true,
        });
      });
  }

  render() {
    const { searchInput, categoryId, results, categories, isLoading } = this.state;
    const Mainprops = { results, isLoading };
    return (
      <div>
        <Categories
          categories={categories}
          onHandleRadio={this.onHandleRadio}
        />
        <Search
          searchInput={searchInput}
          categoryId={categoryId}
          onHandleChange={this.onHandleChange}
          updateResults={this.updateResults}
        />
        <main>
          <MainContent {...Mainprops} />
        </main>
      </div>
    );
  }
}

export default ProductList;
