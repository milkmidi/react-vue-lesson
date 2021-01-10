import React, { useRef } from 'react';

export default function Example2() {
  const domRef = useRef();
  const atClick = () => {
    domRef.current.focus();
  };
  return (
    <div>
      <input className="form-control" ref={domRef} type="text" />
      <button className="btn" onClick={atClick}>focusInput</button>
    </div>
  );
}
