import React, { useState, useEffect } from 'react';

export default function Example6Watch() {
  const [count, setCount] = useState(0);

  const atClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('count', count);
    if (count === 5) {
      alert('hi, React');
      setCount(0);
    }
  }, [count]); // 當 Array 裡的期中一個值有更新，就會執行 useEffect

  return (
    <div>
      <h1>count 到 5 就會跳 Alert:{count}</h1>
      <button className="btn" onClick={atClick}>addCount</button>
    </div>
  );
}
