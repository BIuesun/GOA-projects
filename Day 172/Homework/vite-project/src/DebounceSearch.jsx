import { useState, useEffect, useRef } from 'react';

function DebounceSearch() {
  const [query, setQuery] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (query) {
        console.log('Debounced query:', query);
      }
    }, 500);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [query]);

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="ჩაწერეთ საძებნი ტექსტი..." 
      />
      <p>მიმდინარე: {query}</p>
    </div>
  );
}