import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import types from './todos-types';

const addTodo = createAction('todos/add', (title, text) => {
  return {
    payload: {
      id: shortid.generate(),
      title,
      text,
      completed: false,
    },
  };
});

// const addTodo = (title, text) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     title,
//     text,

//     complete: false,
//   },
// });

const deleteTodo = createAction('todos/delete');

// const deleteTodo = todoId => ({
//   type: types.DELETE,
//   payload: todoId,
// });

const changeFilter = createAction('todos/changeFilter');

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

const toggleComleted = createAction('todos/toggleCompleted');

export default { addTodo, deleteTodo, changeFilter, toggleComleted };
