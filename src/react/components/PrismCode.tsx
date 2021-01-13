/* eslint-disable no-useless-escape */
import React from 'react';

const CLASS_PATTERN = / className="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/g;

type Props = {
  name?: string;
  code: string;
  clearClassName? :boolean;
}
function PrismCode({ name, code, clearClassName = true }:Props) {
  const domRef = React.useRef<HTMLElement>();
  const formatCode = React.useMemo(() => {
    if (clearClassName) {
      return code.replace(CLASS_PATTERN, '');
    }
    return code;
  }, [code, clearClassName]);
  React.useEffect(() => {
    window.Prism.highlightElement(domRef.current);
  }, [formatCode]);
  return (
    <pre className="prism-code language-jsx border" ref={domRef} data-name={name}>
      {
        formatCode
      }
    </pre>
  );
}

export default React.memo(PrismCode);
