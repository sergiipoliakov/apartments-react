import { useState, useEffect } from 'react';

import React from 'react';

export default function Counter() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const handleIncrement = () => {
    setcount(count + 1);
  };

  const [textValue, setTextValue] = useState('');

  useEffect(() => {}, [textValue]);

  const handleChange = evt => {
    setTextValue(evt.target.value);
  };

  return (
    <div>
      <input type="text" value={textValue} onChange={handleChange} />
      <p>You clicked {count} times</p>
      <button type="button" onClick={handleIncrement}>
        Increment counter
      </button>
    </div>
  );
}

// TODO: Добавить какое-то поле ввода чтобы показать useEffect deps
// export default class Counter extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState(state => ({ count: state.count + 1 }));
//   };

//   componentDidMount() {
//     document.title = `You clicked ${this.state.count} times`;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.count !== this.state.count) {
//       document.title = `You clicked ${this.state.count} times`;
//     }
//   }

//   render() {
//     return (

//     );
//   }
// }
