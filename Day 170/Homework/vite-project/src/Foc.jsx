import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="ტექსტი..." />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}