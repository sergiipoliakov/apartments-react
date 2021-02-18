export default function Todo({ title, text, onDelete }) {
  return (
    <>
      <input className="TodoList__checkbox" type="checkbox" />
      <h1>{title}</h1>
      <p className="TodoList__text">{text}</p>
      <button className="TodoList__btn" type="button" onClick={onDelete}>
        Delete Todo
      </button>
    </>
  );
}
