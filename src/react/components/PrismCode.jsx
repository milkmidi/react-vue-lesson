import React from 'react';

export default function PrismCode({ code }){
  const domRef = React.useRef();
  React.useEffect(() => {
    window.Prism.highlightElement(domRef.current);
  }, []);
  return (
    <pre className="language-jsx" ref={domRef}>
      {
        code
      }
    </pre>
  )
};
