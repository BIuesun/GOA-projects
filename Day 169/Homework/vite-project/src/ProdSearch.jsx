import { useState } from 'react';

function ProductSearch() {
  const [search, setSearch] = useState('');
  
  const products = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Phone", price: 800, category: "Electronics" },
    { name: "T-Shirt", price: 35, category: "Clothing" },
    { name: "Headphones", price: 150, category: "Electronics" },
    { name: "Jeans", price: 80, category: "Clothing" }
  ];

  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="პროდუქტის ძებნა..." 
      />
      <ul>
        {filtered.map((p, i) => (
          <li key={i}>{p.name} - {p.price} ლარი ({p.category})</li>
        ))}
      </ul>
    </div>
  );
}