import React, { Component } from 'react';

import CartButton from '../components/CartButton';

class Search extends Component {
  render() {
    const { searchInput, categoryId, onHandleChange, updateResults } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <span className="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
            SPA - Mercado Livre - MIT
          </span>
          <input
            type="text"
            className="form-control form-control-dark w-100"
            data-testid="query-input"
            value={searchInput}
            onChange={(event) => onHandleChange(event)}
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={() => updateResults(categoryId, searchInput)}
          >
            Pesquisar
          </button>
          <CartButton />
        </nav>
      </div>
    );
  }
}

export default Search;
