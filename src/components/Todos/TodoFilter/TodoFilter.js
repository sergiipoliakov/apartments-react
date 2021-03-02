import React from 'react';
import './TodoFilter.css';
import { connect } from 'react-redux';
import { todosSelectors, changeFilter } from '../../../redux/todos';

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
  value: todosSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
