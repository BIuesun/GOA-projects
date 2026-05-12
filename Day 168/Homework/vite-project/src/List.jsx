import { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');

  const length = name.length;

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="შეიყვანეთ სახელი" 
      />
      <p>სიმბოლოების რაოდენობა: {length}</p>
    </div>
  );
}