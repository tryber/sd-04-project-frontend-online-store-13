import React, { Component } from 'react';

function CategorieInput(elem) {
  return (
    <p>
      <label htmlFor={elem.id} data-testid="category">
        <input
          type="radio"
          id={elem.id}
          name="categorie"
          value={elem.name}
        />
        {elem.name}
      </label>
    </p>
  );
}

class Categories extends Component {
  render() {
    const { categories } = this.props;
    if (!categories) return <span>Loading...</span>;
    return (
      <div>
        {categories.map((elem) => CategorieInput(elem))}
      </div>
    );
  }
}

export default Categories;
