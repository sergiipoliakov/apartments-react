import './Box.css';

function Box({ type = 'small', classNames = '', styles }) {
  return <div className={`box box-${type} ${classNames}`}>Box</div>;
}

export default Box;
