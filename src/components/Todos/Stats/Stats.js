import { connect } from 'react-redux';
import './Stats.scss';
import todosSelectors from '../../../redux/todos/todos-selectors';

const Stats = ({ total, completed }) => (
  <div className="Stats">
    <p className="Stats__item">
      <span className="Stats__value">{total}</span>
      <span className="Stats__label">Всего</span>
    </p>
    <p className="Stats__item">
      <span className="Stats__value">{completed}</span>
      <span className="Stats__label">Выполнено</span>
    </p>
  </div>
);

const mapStateToProps = state => ({
  total: todosSelectors.getTotalTodoCount(state),
  completed: todosSelectors.getCompeltedTodosCount(state),
});

export default connect(mapStateToProps)(Stats);
