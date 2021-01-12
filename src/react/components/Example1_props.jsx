import React from 'react';
import PropTypes from 'prop-types';

/*
  <Example1 name="我要傳prop" />
 */

export default function Example1(props) {
  const {
    name,
    age = 18,
  } = props;
  return (
    <div className="example">
      <h1>props.name:{name}, age:{age}</h1>
    </div>
  );
}

Example1.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
