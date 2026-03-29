import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-10 text-center max-w-md mx-auto">
      <h1 className="text-8xl font-bold mb-10 text-gray-800">{count}</h1>
      
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white w-20 h-20 rounded-2xl text-4xl font-bold transition"
        >
          −
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white w-20 h-20 rounded-2xl text-4xl font-bold transition"
        >
          +
        </button>

        <button
          onClick={() => setCount(0)}
          className="bg-gray-500 hover:bg-gray-600 text-white px-8 rounded-2xl text-xl font-medium transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;