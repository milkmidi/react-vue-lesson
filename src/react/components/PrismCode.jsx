import React from 'react';
import PropTypes from 'prop-types';

const CLASS_PATTERN = / className="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/g;

export default function PrismCode({ code, clearClassName = true }) {
  const domRef = React.useRef();
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
    <pre className="language-jsx" ref={domRef}>
      {
        formatCode
      }
    </pre>
  );
}

PrismCode.propTypes = {
  code: PropTypes.string.isRequired,
  clearClassName: PropTypes.bool,
};
