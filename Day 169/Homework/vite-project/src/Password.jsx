
import { useState } from 'react';

function PasswordChecker() {
  const [password, setPassword] = useState('');

  const length = password.length;
  const isLongEnough = length >= 8;
  const hasNumber = /\d/.test(password);

  return (
    <div>
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="შეიყვანეთ პაროლი" 
      />
      <p>სიგრძე: {length}</p>
      <p>8 სიმბოლოზე მეტია: {isLongEnough ? '✅' : '❌'}</p>
      <p>შეიცავს რიცხვს: {hasNumber ? '✅' : '❌'}</p>
    </div>
  );
}