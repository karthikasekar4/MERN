import React, { useRef } from 'react';

function ExampleComponent() {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default ExampleComponent;
