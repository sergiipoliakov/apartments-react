import React from 'react';
import { connect } from 'react-redux';

import Todo from '../Todo';
import todosActions from '../../../redux/todos/todos-actions';
import './TodoLisi.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, title, text }) => (
        <li className="TodoList__item" key={id}>
          <Todo
            text={text}
            title={title}
            onDelete={() => onDeleteTodo(id)}
            onToggleCompleted={() => onToggleCompleted(id)}
          />
        </li>
      ))}
    </ul>
  );
};

const getVisibleTodos = (allTodos, filter) => {
  const normalazedFilter = filter.toLowerCase();

  return allTodos.filter(({ title }) =>
    title.toLowerCase().includes(normalazedFilter),
  );
};

const mapStateToProps = state => {
  const { filter, items } = state.todos;
  const visibleTodos = getVisibleTodos(items, filter);

  return {
    todos: visibleTodos,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosActions.deleteTodo(id)),
  onToggleCompleted: id => dispatch(todosActions.toggleComleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
