import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.todos.loading;

const getFilter = state => state.todos.filter;

const getAllTodos = state => state.todos.items;

const getTotalTodoCount = state => {
  const todos = getAllTodos(state);

  return todos.length;
};

const getCompletedTodosCount = createSelector([getAllTodos], todos => {
  console.log('считываю новое');
  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
});

const getVisivleTodos = createSelector(
  [getAllTodos, getFilter],
  (todos, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(({ text }) =>
      text.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getFilter,
  getLoading,
  getVisivleTodos,
  getTotalTodoCount,
  getCompletedTodosCount,
};

// const getCompletedTodosCount = state => {
//   const todos = getAllTodos(state);
//   return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
// };

// const getVisivleTodos = state => {
//   const todos = getAllTodos(state);
//   const filter = getFilter(state);

//   const normalizedFilter = filter.toLowerCase();
//   return todos.filter(({ text }) =>
//     text.toLowerCase().includes(normalizedFilter),
//   );
// };
