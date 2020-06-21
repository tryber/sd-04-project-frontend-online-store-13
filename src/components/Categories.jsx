import React, { Component } from 'react';

function CategorieInput(elem, onHandleRadio) {
  return (
    <div key={elem.id}>
      <label htmlFor={elem.id} data-testid="category">
        <input
          type="radio"
          id={elem.id}
          name="categorie"
          value={elem.name}
          onChange={() => onHandleRadio(elem.id)}
        />
        {elem.name}
      </label>
    </div>
  );
}

class Categories extends Component {
  render() {
    const { categories, onHandleRadio } = this.props;
    if (!categories) return <span>Loading...</span>;
    return (
      <div>
        {categories.map((elem) => CategorieInput(elem, onHandleRadio))}
      </div>
    );
  }
}

export default Categories;
