import React, { Component } from 'react';
import * as api from '../../services/api';

function CategorieInput(elem, selectedOption, optionChange ) {
  return (
    
      <label htmlFor={elem.id} data-testid="category">
        <input
          type="radio"
          id={elem.id}
          name="categorie"
          value={elem.name}
          checked={selectedOption === elem.id}
          onChange={optionChange}
        />
        {elem.name}
      </label>
    
  );
}

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state= {
      selectedOption: '',
      produto: [],
    };
    this.optionChange = this.optionChange.bind(this);
  }

  optionChange(event) {
    console.log(event.target.id)
    this.setState({
      selectedOption: event.target.id
    })
    return api.getProductsFromCategoryAndQuery(this.state.selectedOption, '').then((results) => this.setState({ produto: results }));
  }

  render() {
    const { categories } = this.props;
    const {selectedOption} = this.state;
    if (!categories) return <span>Loading...</span>;
    return (
      <div>
        {categories.map((elem) => CategorieInput(elem , selectedOption, this.optionChange))}
      </div>
    );
  }
}

export default Categories;  
