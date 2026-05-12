import { useState, useEffect, useRef } from 'react';

function DebounceFilter() {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const timeoutRef = useRef(null);

  const users = [
    { id: 1, name: "გიორგი" },
    { id: 2, name: "მარიამი" },
    { id: 3, name: "დავითი" },
    { id: 4, name: "ანა" },
    { id: 5, name: "საბა" },
    { id: 6, name: "ნინო" },
    { id: 7, name: "ლევანი" }
  ];

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const result = users.filter(user => 
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(result);
      console.log('Debounced filtered result:', result);
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
        placeholder="მომხმარებლის ძებნა..." 
      />
      
      <h3>შედეგები ({filtered.length})</h3>
      <ul>
        {filtered.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}