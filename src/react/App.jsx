import React, { useState } from 'react';
import logo from '../assets/react-logo.svg';
import PrismCode from './components/PrismCode';
import * as Syntax from './components/.syntax';

import Example0 from './components/Example0_state';
import Example1 from './components/Example1_props';

function App() {
  const [exampleIdx, setExampleIdx] = useState(0);
  React.useEffect(() => {
    const handler = ({ detail }) => {
      setExampleIdx(detail);
    };
    window.addEventListener('changeExample', handler);
    return () => {
      window.removeEventListener('changeExample', handler);
    };
  }, []);

  return (
    <div className="react-app">
      <div className="text-center">
        <img src={logo} className="logo" />
        <h1>Example {exampleIdx}</h1>
      </div>
      {
        exampleIdx === 0 && (
          <section data-name="State">
            <Example0 />
            <PrismCode code={Syntax.Example0_state} />
          </section>
        )
      }
      { exampleIdx === 1 && (
      <section data-name="State">
        <Example1 name="milkmidi" data-value="9527" />
        <PrismCode code={Syntax.Example1_props} />
      </section>
      )}
    </div>
  );
}

export default App;
