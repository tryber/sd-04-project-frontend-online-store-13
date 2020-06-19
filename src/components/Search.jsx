import React, { Component } from "react";

class Search extends Component {
  render() {
    const { searchInput, categoryId, onHandleChange, updateResults } = this.props;
    return (
      <div>
        <nav>
          <input
            type="text"
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
        </nav>
      </div>
    );
  }
}

export default Search;
