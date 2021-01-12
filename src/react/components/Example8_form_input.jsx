import React from 'react';

export default function Example8() {
  const [name, setName] = React.useState('');
  const atChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="example">
      <h1>input</h1>
      <h4>name:{name}</h4>
      <input type="text" className="form-control" value={name} onChange={atChange} />
    </div>
  );
}
