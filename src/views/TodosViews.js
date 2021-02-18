import React, { Component } from 'react';
import shortid from 'shortid';
import TodoEditor from '../components/Todos';
import TodoModal from '../components/Modal/Modal';
import TodoList from '../components/Todos/TodoList/TodoList';

export default class TodosViews extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  addTodo = (title, text) => {
    const todo = {
      id: shortid.generate(),
      title,
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
    this.toggleModal();
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todo: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  getVisibleTodos = () => {
    const todos = this.state.todos;
    return todos;
  };

  render() {
    const { todos, showModal } = this.state;

    return (
      <div>
        {showModal && (
          <TodoModal closeModal={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </TodoModal>
        )}

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />

        <button type="button" onClick={this.toggleModal}>
          show Modal
        </button>
      </div>
    );
  }
}
