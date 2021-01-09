import React, { useState } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);
  const atClick = () => {
    // count = 100; // fail
    setCount(count + 1);
  };
  return (
    <div>
      <h1>count:{count}</h1>
      <button
        className="btn"
        onClick={atClick}
      >addCount1</button>
      <button
        className="btn"
        onClick={() => atClick()}
      >addCount2</button>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
      >addCount3</button>
    </div>
  );
}
