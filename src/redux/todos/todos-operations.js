import axios from 'axios';
import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
} from './todos-actions';

// axios.defaults.baseURL = 'http://localhost:4040';

const fetchTodos = () => async dispatch => {
  dispatch(fetchTodosRequest());

  try {
    const { data } = await axios.get('/tasks');

    dispatch(fetchTodosSuccess(data));
  } catch (error) {
    dispatch(fetchTodosError(error.message));
  }
};

const addTodo = (title, description) => dispatch => {
  const todo = { title, description, completed: false };

  dispatch(addTodoRequest());

  axios
    .post('/tasks', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error => dispatch(addTodoError(error.message)));
};

const deleteTodo = todoId => dispatch => {
  dispatch(deleteTodoRequest());

  axios
    .delete(`/tasks/${todoId}`)
    .then(() => dispatch(deleteTodoSuccess(todoId)))
    .catch(error => dispatch(deleteTodoError(error.message)));
};

const toggleCompleted = ({ id, completed }) => dispatch => {
  const update = { completed };

  dispatch(toggleCompletedRequest());

  axios
    .patch(`/tasks/${id}`, update)
    .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
    .catch(error => dispatch(toggleCompletedError(error.message)));
};

export default {
  addTodo,
  deleteTodo,
  toggleCompleted,
  fetchTodos,
};
