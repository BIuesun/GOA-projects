import { useRef } from 'react';

function ChangeColor() {
  const textRef = useRef(null);

  const changeColor = () => {
    textRef.current.style.color = 'red';
  };

  return (
    <div>
      <p ref={textRef}>ეს ტექსტი ფერადი გახდება</p>
      <button onClick={changeColor}>შეცვალე ფერი</button>
    </div>
  );
}