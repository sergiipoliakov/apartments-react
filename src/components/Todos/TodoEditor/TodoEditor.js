import React, { Component } from 'react';
import { connect } from 'react-redux';
import todosActions from '../../../redux/todos/todos-actions';
import './TodoEditor.css';

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
          <button className="TodoEditor__button" type="submit">
            Add todo!
          </button>
        </form>
      </div>
    );
  }
}

const mapDipatchToProps = dispatch => ({
  onSubmit: text => dispatch(todosActions.addTodo(text)),
});

export default connect(null, mapDipatchToProps)(TodoEditor);
// export default TodoEditor;
