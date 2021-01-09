/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import logo from '../assets/react-logo.svg';
import PrismCode from './components/PrismCode';
import * as Syntax from './components/.syntax';

import Example0 from './components/Example0_state';
import Example1 from './components/Example1_props';
import Example2 from './components/Example2_lifecycle';

function App() {
  const [exampleIdx, setExampleIdx] = useState(window.currentIndex || 0);
  const [show, setShow] = useState(true);
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
      </div>
      {
        exampleIdx === 0 && (
          <section>
            <h6>
              <p>React 使用 useState 來宣告，會回傳 Array</p>
              <p>const [count, setCount] = useState(0);</p>
              <p>更新值需使用 setCount(新的值), 直接寫 count = 100; 並不會重新 render</p>
            </h6>
            <hr />
            <Example0 />
            <PrismCode code={Syntax.Example0_state} />
          </section>
        )
      }
      {
        exampleIdx === 1 && (
          <section>
            <h6>props 型別可以用 flowjs 或是 typescipe定義</h6>
            <hr />
            <Example1 name="milkmidi" data-value="9527" />
            <PrismCode code={Syntax.Example1_props} />
          </section>
        )
      }
      {
        exampleIdx === 2 && (
          <section>
            <h6>React 使用 useEffect</h6>
            <button className="btn" onClick={() => setShow(!show)}>toggle show</button>
            <hr />
            {
              show && <Example2 />
            }
            <PrismCode code={Syntax.Example2_lifecycle} />
          </section>
        )
      }
    </div>
  );
}

export default App;
