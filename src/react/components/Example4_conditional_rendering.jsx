import React, { useState } from 'react';

export default function Example4() {
  const [show, setShow] = useState(true);
  const atClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <button className="btn mb-1" onClick={atClick}>switch show:{show.toString()}</button>
      {
        show && (
          <h1 className="border p-3 bg-react text-white rounded">React</h1>
        )
      }
      <h2
        style={{
          display: show ? 'block' : 'none'
        }}
        className="border p-3 bg-react text-white rounded"
      >css display block/none</h2>
    </div>
  );
}
