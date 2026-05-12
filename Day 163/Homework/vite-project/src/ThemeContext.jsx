import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value="dark">
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeStatus() {
  const theme = useContext(ThemeContext);
  return <p>მიმდინარე თემა არის: <strong>{theme}</strong></p>;
}