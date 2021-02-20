import React, { Component } from 'react';
import shortid from 'shortid';
import Container from '../components/Container';
import Filter from '../components/Todos/TodoFilter';
import TodoEditor from '../components/Todos';
import TodoModal from '../components/Modal/Modal';
import TodoList from '../components/Todos/TodoList/TodoList';

export default class TodosViews extends Component {
  state = {
    // todos: [],
    // filter: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  componentDidMount() {
    const todos = localStorage.getItem('todos');

    const parsTodos = JSON.parse(todos);

    if (parsTodos) {
      this.setState({ todos: parsTodos });
    }
  }

  // addTodo = (title, text) => {
  //   const todo = {
  //     id: shortid.generate(),
  //     title,
  //     text,
  //     completed: false,
  //   };

  // this.setState(({ todos }) => ({
  //   todos: [todo, ...todos],
  // }));
  // this.toggleModal();
  // };

  // deleteTodo = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };

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
        <div>
          <Filter />
        </div>
        {showModal && (
          <TodoModal closeModal={this.toggleModal}>
            <TodoEditor />
          </TodoModal>
        )}

        <TodoList />

        <button type="button" onClick={this.toggleModal}>
          show Modal
        </button>
      </div>
    );
  }
}
