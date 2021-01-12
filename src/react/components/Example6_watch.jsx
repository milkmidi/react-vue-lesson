import React, { useState, useEffect, useLayoutEffect } from 'react';

export default function Example6Watch() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    if (count === 5) {
      alert('hi, React');
      setCount(0);
    }
  }, [count]); // 當 Array 裡的期中一個值有更新，就會執行 useEffect

  useLayoutEffect(() => {
    if (count2 === 5) {
      alert('hi, React');
      setCount2(0);
    }
  }, [count2]);

  return (
    <div className="example">
      <div className="border p-1">
        <h1>useEffetct, count 到 5 就會跳 Alert:{count}</h1>
        <p>會看到 count 是 5, 然後跳 Alert, 再變回 0</p>
        <button className="btn" onClick={() => setCount(count + 1)}>addCount</button>
      </div>
      <hr />
      <div className="border p-1">
        <h1>useLayoutEffect, count2 到 5 就會跳 Alert:{count2}</h1>
        <p>會看到 count 是 4, 然後跳 Alert, 再變回 0</p>
        <button className="btn" onClick={() => setCount2(count2 + 1)}>addCount2</button>
      </div>
    </div>
  );
}
