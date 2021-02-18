import React from 'react';

import Todo from '../Todo';
import './TodoLisi.css';

const TodoList = ({ todos, onDeleteTodo = () => null }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, title, text }) => (
        <li className="TodoList__item" key={id}>
          <Todo text={text} title={title} onDelete={() => onDeleteTodo(id)} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
