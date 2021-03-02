export default function Todo({
  title,
  text,
  onDelete,
  completed,
  onToggleCompleted,
}) {
  return (
    <>
      <input
        className="TodoList__checkbox"
        type="checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <h1 className="TodoList__text">{title}</h1>

      <p className="TodoList__text">{text}</p>
      <button className="TodoList__btn" type="button" onClick={onDelete}>
        Delete Todo
      </button>
    </>
  );
}
