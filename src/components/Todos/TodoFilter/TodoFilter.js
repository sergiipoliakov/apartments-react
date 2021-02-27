import React from 'react';
import './TodoFilter.css';
import { connect } from 'react-redux';
import * as todosActions from '../../../redux/todos/todos-actions';

const Filter = ({ value, onChange }) => (
  <div className="TodoFilter">
    <p className="TodoFilter__label">Фильтр по содержимому</p>
    <input
      type="text"
      className="TodoFilter__input"
      value={value}
      onChange={onChange}
    />
  </div>
);
const mapStateToProps = state => ({
  value: state.todos.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(todosActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
