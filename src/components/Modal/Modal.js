import React from 'react';
import './Modal.css';

export default function TodoModal({ children, closeModal }) {
  return (
    <div className="Modal__backdrop">
      <div className="Modal__content">{children}</div>
      <button onClick={closeModal}>hide modal</button>
    </div>
  );
}
