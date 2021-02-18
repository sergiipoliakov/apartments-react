import shortid from 'shortid';
import types from './todos-types';

const addTodo = (title, text) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    title,
    text,

    complete: false,
  },
});

const deleteTodo = todoId => ({
  type: types.DELETE,
  payload: todoId,
});

export default { addTodo };
