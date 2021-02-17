import React, { Component } from 'react';

export default class Todos extends Component {
  state = {
    todos: [],

    filter: '',
    showModal: false,
  };

  handleChange = event => {
    const { name, value } = event.target;
  };

  handleSubmit = event => {
    event.preventDefault();

    console.dir(event.target);
  };

  render() {
    return (
      <>
        <div>
          <h1>Todos</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="title" onChange={this.handleChange} />
            <input type="text" name="decription" onChange={this.handleChange} />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      </>
    );
  }
}
