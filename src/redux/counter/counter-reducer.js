import { combineReducers } from 'redux';
import actionsTypes from './counter-types';

const valueReducer = (state = 10, { type, payload }) => {
  switch (type) {
    case actionsTypes.INCREMENT:
      return {
        value: state + payload,
      };

    case actionsTypes.DECREMENT:
      return {
        value: state - payload,
      };
    default:
      return state;
  }
};
const stepReducer = (state = 5, actions) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
