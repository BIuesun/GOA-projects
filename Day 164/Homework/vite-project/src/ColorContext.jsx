import { createContext, useContext } from 'react';

const ColorContext = createContext('black');

export function ColorProvider({ children }) {
  return (
    <ColorContext.Provider value="red">
      {children}
    </ColorContext.Provider>
  );
}

export function ColoredText() {
  const color = useContext(ColorContext);
  return (
    <h2 style={{ color }}>ეს ტექსტი არის {color} ფერის</h2>
  );
}