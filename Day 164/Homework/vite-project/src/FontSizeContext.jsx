import { createContext, useContext } from 'react';

const FontSizeContext = createContext(16);

export function FontSizeProvider({ children }) {
  return (
    <FontSizeContext.Provider value={24}>
      {children}
    </FontSizeContext.Provider>
  );
}

export function ResizableText() {
  const fontSize = useContext(FontSizeContext);
  return (
    <p style={{ fontSize: `${fontSize}px` }}>
      ამ ტექსტის ზომა არის {fontSize}px
    </p>
  );
}