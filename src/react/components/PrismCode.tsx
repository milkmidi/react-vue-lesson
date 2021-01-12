/* eslint-disable no-useless-escape */
import React from 'react';

const CLASS_PATTERN = / className="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/g;

type Props = {
  code: string;
  clearClassName? :boolean;
}
export default function PrismCode({ code, clearClassName = true }:Props) {
  const domRef = React.useRef<HTMLElement>();
  const formatCode = React.useMemo(() => {
    if (clearClassName) {
      return code.replace(CLASS_PATTERN, '');
    }
    return code;
  }, [code, clearClassName]);
  React.useEffect(() => {
    window.Prism.highlightElement(domRef.current);
  }, []);
  return (
    <pre className="language-jsx border" ref={domRef}>
      {
        formatCode
      }
    </pre>
  );
}
