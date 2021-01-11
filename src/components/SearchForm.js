import React, { Component } from 'react';

export default class SearchForm extends Component {
  state = {
    inputValue: '',
  };
  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state.inputValue);
    this.props.onSubmit(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter search query
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">search</button>
      </form>
    );
  }
}
