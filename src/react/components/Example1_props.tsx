import React from 'react';

/**
 * props 型別可以用 flowjs 或是 typescipe定義
 */
type Props = {
  name: string;
}
export default function Example1(props:Props) {
  const { name } = props;
  return (
    <div>
      <h1>props.name:{name}</h1>
    </div>
  );
}
