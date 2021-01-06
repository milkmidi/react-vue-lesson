import React, { useState } from 'react'

export default function Example() {
  const [count, setCount] = useState(0);
  const atClick = () => {
    setCount(count + 1);
  }
  return (
    <section data-name="Example0_state">
      <h1>{count}</h1>
      <button
        className="btn btn-primary"
        onClick={atClick}>addCount</button>
    </section>
  )
};
