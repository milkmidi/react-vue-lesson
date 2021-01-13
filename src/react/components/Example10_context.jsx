import React, { useState, useContext, useEffect } from 'react';
import cx from 'clsx';

const MyContext = React.createContext();

const ContextConsumerComponent = () => {
  const { theme, foo, toggleTheme } = useContext(MyContext);
  return (
    <div className="border p-1">
      <h3>{theme}</h3>
      <h3>{foo}</h3>
      <button className="btn" onClick={toggleTheme}>toggleTheme</button>
    </div>
  );
};

export default function Example10() {
  const [theme, setTheme] = useState('light');
  const [foo, setFoo] = useState(9527);
  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setFoo((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timeoutId);
  }, []);

  return (
    <MyContext.Provider value={{ theme, toggleTheme, foo }}>
      <div className={cx('example', `theme-${theme}`)}>
        <ContextConsumerComponent />
      </div>
    </MyContext.Provider>
  );
}
