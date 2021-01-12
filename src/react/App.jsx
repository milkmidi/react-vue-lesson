/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import logo from '../assets/react-logo.svg';
import Syntax from './template.json';

import PrismCode from './components/PrismCode';
import Example0 from './components/Example0_state';
import Example1 from './components/Example1_props';
import Example1TSX from './components/Example1_props_tsx';
import Example2 from './components/Example2_ref';
import Example3 from './components/Example3_lifecycle';
import Example4 from './components/Example4_conditional_rendering';
import Example5 from './components/Example5_lists';
import Example6 from './components/Example6_watch';
import Example7 from './components/Example7_useMemo';
import BusinessService from './components/BusinessService';

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
              <p>宣告 state 變數，會回傳 Array</p>
              <p>const [count, setCount] = useState(0);</p>
              <p>更新值需使用 setCount(新的值), 直接寫 count = 100; 並不會重新 render</p>
              <a
                href="https://reactjs.org/docs/hooks-state.html"
                target="_blank"
                rel="noreferrer"
                className="btn btn-link"
              >Document</a>
            </h6>
            <hr />
            <Example0 />
            <PrismCode code={Syntax.Example0_state} />
          </section>
        )
      }
      {
        exampleIdx === 1 && (
          <>
            <section>
              <div>
                <h6>
                  <p>父組件傳什麼，都會放到 props 裡</p>
                  <p>props 型別可以用 PropTypes 定義</p>
                </h6>
              </div>
              <hr />
              <Example1 name="milkmidi" data-value="9527" />
              <PrismCode code={Syntax.Example1_props} />
            </section>
            <section>
              <h6>或是使用 typescript 定義 props</h6>
              <hr />
              <Example1TSX name="milkmidi" />
              <PrismCode code={Syntax.Example1_props_tsx} />
            </section>
          </>
        )
      }
      {
        exampleIdx === 2 && (
          <section>
            <h6>React 使用 useRef</h6>
            <hr />
            {
              show && <Example2 />
            }
            <PrismCode code={Syntax.Example2_ref} />
          </section>
        )
      }
      {
        exampleIdx === 3 && (
          <section>
            <h6>React 使用 useEffect</h6>
            <div className="switch">
              <input
                type="checkbox"
                checked={show}
                onChange={({ target }) => setShow(target.checked)}
              />
              <span />
            </div>
            <hr />
            {
              show && <Example3 />
            }
            <PrismCode code={Syntax.Example3_lifecycle} />
          </section>
        )
      }
      {
        exampleIdx === 4 && (
          <section>
            <h6>{'{ show && <YourComponent />}'}</h6>
            <h6>{'{ show ? <A /> : <B />}'}</h6>
            <h6>或是使用 css display block/none 切換</h6>
            <h6>React JSX style 需要用 Object 寫法，不能用 string 寫法</h6>
            <hr />
            <Example4 />
            <PrismCode code={Syntax.Example4_conditional_rendering} />
          </section>
        )
      }
      {
        exampleIdx === 5 && (
          <section>
            <h6>使用 JS map</h6>
            <hr />
            <Example5 />
            <PrismCode code={Syntax.Example5_lists} />
          </section>
        )
      }
      {
        exampleIdx === 6 && (
          <section>
            <h6>
              <p>使用 useEffect / useLayoutEffect</p>
              <p>useEffect 和 useLayoutEffect 使用方法一樣</p>
              <p>差別在於 useEffect 是 DOM Render 完後才執行</p>
              <p>useLayoutEffect 是 DOM Render 前執行</p>
            </h6>
            <hr />
            <Example6 />
            <PrismCode code={Syntax.Example6_watch} />
          </section>
        )
      }
      {
        exampleIdx === 7 && (
          <section>
            <h6>useMemo, 可以用來 cache 值, 避免重新計算</h6>
            <hr />
            <Example7 />
            <PrismCode code={Syntax.Example7_useMemo} />
          </section>
        )
      }
      {
        exampleIdx === 9999 && (
          <section>
            <BusinessService />
          </section>
        )
      }
    </div>
  );
}

export default App;
