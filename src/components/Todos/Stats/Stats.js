import { connect } from 'react-redux';
import './Stats.css';

const Stats = ({ total, completed }) => {
  console.log(completed);
  return (
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
};
const getCompeltedTodosCount = todos => {
  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
};

const mapStateToProps = state => ({
  total: state.todos.items.length,
  completed: getCompeltedTodosCount(state.todos.items),
});

export default connect(mapStateToProps)(Stats);
