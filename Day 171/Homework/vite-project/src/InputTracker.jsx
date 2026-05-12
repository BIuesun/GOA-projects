import { useState, useRef } from 'react';

function InputTracker() {
  const [text, setText] = useState('');
  const prevTextRef = useRef('');

  const handleChange = (e) => {
    prevTextRef.current = text;
    setText(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="ტექსტი..." 
      />
      <p>მიმდინარე: {text}</p>
      <p>წინა: {prevTextRef.current}</p>
    </div>
  );
}