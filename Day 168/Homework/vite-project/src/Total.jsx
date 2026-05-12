import { useState } from 'react';

function ProductTotal() {
  const [products] = useState([
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Headphones", price: 150 }
  ]);

  const total = products.reduce((sum, p) => sum + p.price, 0);

  return (
    <div>
      <h3>პროდუქტები</h3>
      <ul>
        {products.map((p, i) => (
          <li key={i}>{p.name} - {p.price} ლარი</li>
        ))}
      </ul>
      <h3>ჯამური ფასი: {total} ლარი</h3>
    </div>
  );
}