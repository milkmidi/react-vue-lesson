import React, { useState, useMemo } from 'react';

const computeExpensiveValue = (value) => {
  console.log('computeExpensiveValue');
  let r = value;
  for (let i = 0; i < 100000000; i += 1) {
    r += 1;
  }
  return r;
};

export default function Example7() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  console.time();
  const memoizedValue = useMemo(() => {
    const result = computeExpensiveValue(count);
    return result;
  }, [count]); // 當 count 有更新時才重新計算
  console.timeEnd();

  return (
    <div className="example">
      <h1>count: {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>setCount</button>
      <h2>memoizedValue: {memoizedValue}</h2>
      <h1>count2: {count2}</h1>
      <button className="btn" onClick={() => setCount2(count2 + 1)}>setCount2</button>
    </div>
  );
}
