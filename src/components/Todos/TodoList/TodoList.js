import React from 'react';
import classNames from 'classnames';
import Todo from '../Todo';
import './TodoLisi.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, title, description, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <Todo
          title={title}
          text={description}
          completed={completed}
          onToggleCompleted={() =>
            onToggleCompleted({ id, completed: !completed })
          }
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
