import React from 'react';

export default function Section({ title, children }) {
  return (
    <seectiov>
      <h2>{title}</h2>
      {children}
    </seectiov>
  );
}
