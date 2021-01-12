import React from 'react';

type Props = {
  name: string;
  age?: number;
}

export default function Example1TSX(props:Props) {
  const {
    name,
    age = 18
  } = props;
  return (
    <div className="example">
      <h1>props.name:{name}, age:{age}</h1>
    </div>
  );
}
