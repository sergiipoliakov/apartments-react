import React from 'react';

const TaskListItem = ({ text, completed, onRemove, onUpdate }) => (
  <li className="TaskList-item">
    <p className="TaskList-text">{text}</p>
    <label>
      <input type="checkbox" checked={completed} onChange={onUpdate} />
      Completed
    </label>

    <section className="TaskList-actions">
      <button type="button" className="TaskList-button" onClick={onRemove}>
        Удалить
      </button>
    </section>
  </li>
);

export default TaskListItem;
