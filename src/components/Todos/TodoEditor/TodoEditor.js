import React, { Component } from 'react';
import { connect } from 'react-redux';
import todosOperations from '../../../redux/todos/todos-operations';
import './TodoEditor.scss';

class TodoEditor extends Component {
  state = {
    title: '',
    message: '',
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, message } = this.state;
    const onSubmit = this.props.onSubmit;

    onSubmit(title, message);
    this.props.onSave();
    this.setState({
      title: '',

      message: '',
    });
  };

  render() {
    const { title, message } = this.state;

    return (
      <div className="TodoEditor">
        <form onSubmit={this.handleSubmit}>
          <input
            className="TodoEditor__textarea"
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={this.handleChange}
          />
          <textarea
            placeholder="please enter yours message!"
            className="TodoEditor__textarea"
            name="message"
            value={message}
            onChange={this.handleChange}
          />
          <button type="submit" className="TodoEditor__button">
            Сохранить
          </button>
        </form>
      </div>
    );
  }
}

const mapDipatchToProps = dispatch => ({
  onSubmit: (title, text) => dispatch(todosOperations.addTodo(title, text)),
});

export default connect(null, mapDipatchToProps)(TodoEditor);
