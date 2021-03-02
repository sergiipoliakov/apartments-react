import { combineReducers, createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction('counterButton/add');

const value = createReducer(0, {
  [increment]: (state, _) => state + 1,
});

export default combineReducers({
  value,
});
