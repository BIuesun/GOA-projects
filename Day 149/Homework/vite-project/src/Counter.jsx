import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 text-center">
      <h2 className="text-6xl font-bold mb-6">{count}</h2>
      <div className="flex gap-4 justify-center">
        <button 
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white w-16 h-16 rounded-full text-3xl"
        >
          −
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full text-3xl"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;