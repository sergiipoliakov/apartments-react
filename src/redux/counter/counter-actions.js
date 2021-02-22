import actionsTypes from './counter-types';

export const increment = value => ({
  type: actionsTypes.INCREMENT,
  payload: value,
});

export const decrement = value => ({
  type: actionsTypes.DECREMENT,
  payload: value,
});
