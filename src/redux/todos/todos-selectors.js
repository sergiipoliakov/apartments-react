const getLoading = state => state.todos.loading;

const getFilter = state => state.todos.filter;
const getAllTodos = state => state.todos.items;

const getTotalTodoCount = state => {
  const todos = getAllTodos(state);

  return todos.length;
};

const getCompeltedTodosCount = state => {
  const todos = getAllTodos(state);
  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
};

const getVisivleTodos = state => {
  // const todos = getAllTodos(state);
  // const filter = getFilter(state);
  const { items, filter } = state.todos;
  console.log(filter);
  // const filterd = filter.toLowerCase();
  if (filter) {
    const filteredTodos = items.filter(todo =>
      todo.title.toLowerCase().includes(filter.toLowerCase()),
    );
    return {
      filteredTodos: filteredTodos,
    };
  }
  return items;

  // return items.filter(({ text }) =>
  //   text.toLowerCase().includes(normalizedFilter),
  // );
};

export default {
  getFilter,
  getLoading,
  getVisivleTodos,
  getTotalTodoCount,
  getCompeltedTodosCount,
};
