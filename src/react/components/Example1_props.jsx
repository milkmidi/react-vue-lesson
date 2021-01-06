import React from 'react';

export default function Example1(props) {
  const {
    name,
    ...fields
  } = props;
  return (
    <div data-name="Example1_props" {...fields}>
      <h1>{name}</h1>
    </div>
  );
}
