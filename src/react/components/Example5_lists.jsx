import React, { useState } from 'react';

export default function Example5() {
  const [lists] = useState(['React', 'vue', 'angular', 'jQuery']);

  return (
    <>
      <ul className="border">
        { lists.map((text) => <li key={text}>{text}</li>) }
      </ul>
      <ul className="border">
        {
          lists.map((text) => (
            <React.Fragment key={text}>
              <li>{text}</li>
              <hr />
            </React.Fragment>
          ))
        }
      </ul>
    </>
  );
}
