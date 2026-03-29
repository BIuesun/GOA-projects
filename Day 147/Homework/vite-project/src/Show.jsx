import { useState } from 'react';

function Show() {
  const [show, setShow] = useState(false);

  return (
    <div className="p-8">
      <button 
        onClick={() => setShow(!show)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
      >
        {show ? 'Hide' : 'Show'}
      </button>

      {show && (
        <p className="mt-6 text-3xl font-bold text-green-600">
          Hello World
        </p>
      )}
    </div>
  );
}

export default Show;