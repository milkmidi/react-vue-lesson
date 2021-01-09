import React from 'react';

export default function Example2() {
  const domRef = React.useRef();
  React.useEffect(() => {
    console.log('React Component Mounted');
    // useEffect 會等到 render 完成後才發生
    // 此時可以存取元素
    console.log(domRef.current);
    return () => {
      console.log('React Component Unmount');
      // React 17.x 更新了 useEffect clear 時間點
      // useEffect clear 會等到 render 完成後才發生
      // 些時元素已刪除，所以 dom 會是 null
      console.log(domRef.current);
    };
  }, []); // 這裡要填空 Array
  return (
    <h1 ref={domRef}>React, lifecycle</h1>
  );
}
