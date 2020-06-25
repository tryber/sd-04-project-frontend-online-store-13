import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import '../style/Rating.css';

class Rationg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      comment: '',
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleClick = this.onHandleClick.bind(this);
    this.onHandleClean = this.onHandleClean.bind(this);
  }

  onHandleClick(rating) {
    this.setState({ rating });
  }

  onHandleChange(comment) {
    this.setState({ comment });
  }

  onHandleClean() {
    this.setState({ comment: '', rating: null });
  }

  render() {
    const { rating, comment } = this.state;
    const arrValuation = [1, 2, 3, 4, 5];

    return (
      <div>
        <textarea
          data-testid="product-detail-evaluation"
          rows="8"
          value={comment}
          onChange={(e) => this.onHandleChange(e.target.value)}
        />
        <div>
          <h5 className="card-title">Avaliação</h5>
          {arrValuation.map((star, index) => (
            <label htmlFor={index} key={star}>
              <input
                type="radio"
                id={index}
                onClick={() => this.onHandleClick(index + 1)}
              />
              <FaStar color={(index + 1) <= rating ? '#ffc107' : '#e4e5e9'} size={35} />
            </label>
          ))}
        </div>
        <button onClick={this.onHandleClean}>Enviar</button>
      </div>
    );
  }
}

export default Rating;
