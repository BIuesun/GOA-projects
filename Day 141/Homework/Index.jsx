import React from 'react'

export const index = () => {
  return (
    <div>index</div>
  )
}

import React from 'react'

function index() {
  return (
    <div>index</div>
  )
}

function Button() {
  return <button>Click Me</button>;
}

function Greeting() {
  return <h1>Hello, welcome!</h1>;
}
function Header() {
  return <header><h1>My Website</h1></header>;
}

function Footer() {
  return <footer><p>© 2025 Luka</p></footer>;
}
function Product({ name, price, image }) {
  return (
    <div className="product">
      <img src={image} alt={name} width="150" />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </div>
  );
}
<Product 
  name="Headphones"
  price={59.99}
  image="headphones.jpg"
/>

export default index