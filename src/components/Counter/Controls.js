import React from 'react';

export default function Controls({ step, onIncrement, onDecrement }) {
  return (
    <div className="Counter__controls">
      <button type="button" onClick={onIncrement}>
        увеличить на +{step}
      </button>
      <button type="button" onClick={onDecrement}>
        Уменьшить на -{step}
      </button>
    </div>
  );
}
