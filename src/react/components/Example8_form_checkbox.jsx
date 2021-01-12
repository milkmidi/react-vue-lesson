/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useCallback } from 'react';

const SKILLS = ['react', 'vue', 'angular'];
export default function Example8() {
  const [skills, setSkills] = useState([]);

  const atChange = useCallback((e) => {
    const { checked, value } = e.target;

    setSkills((prev) => {
      const idxOf = prev.indexOf(value);
      if (checked && idxOf < 0) {
        return prev.concat(value);
      } if (idxOf > -1) {
        return prev.slice(0, idxOf).concat(prev.slice(idxOf + 1));
      }
      return prev;
    });
  }, []);
  return (
    <div className="example">
      <h1>checkbox</h1>
      <h4>skills:{JSON.stringify(skills)}</h4>
      {
        SKILLS.map((name) => (
          <label key={name} className="mr-4">
            <input
              type="checkbox"
              checked={skills.indexOf(name) !== -1}
              value={name}
              onChange={atChange}
            />
            <span>{name}</span>
          </label>
        ))
      }
    </div>
  );
}
