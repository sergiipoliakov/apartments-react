import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './todos-actions';
import types from './todos-types';

const items = createReducer([], {
  [actions.addTodo]: (state, action) => [...state, action.payload],
  [actions.deleteTodo]: (state, action) =>
    state.filter(todo => todo.id !== action.payload),
  [actions.toggleComleted]: (state, action) =>
    state.map(todo =>
      todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo,
    ),
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(todo => todo.id !== payload);

//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
