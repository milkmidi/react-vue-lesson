import React from 'react';
import PropTypes from 'prop-types';

export default function Example1(props) {
  const { name } = props;
  return (
    <div>
      <h1>props.name:{name}</h1>
    </div>
  );
}

Example1.propTypes = {
  name: PropTypes.string,
};
