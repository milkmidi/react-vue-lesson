import React, { useState } from 'react'

export default function Example() {
  const [count, setCount] = useState(0);
  const atClick = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={atClick}>addCount</button>
      <button className="btn" onClick={()=> atClick()}>addCount</button>
      <button className="btn" onClick={()=> setCount(count + 1)}>addCount</button>
    </div>
  )
};
