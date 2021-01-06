import React, { useState } from 'react'

export default function Example1(props) {
  const {
    name,
    ...fields
  } = props;
  return (
    <section data-name="Example1_props" {...fields}>
      <h1>{name}</h1>
    </section>
  )
};
