import { createContext, useContext } from 'react';

const UserContext = createContext('');

export function UserProvider({ children }) {
  return (
    <UserContext.Provider value="Jemaliko">
      {children}
    </UserContext.Provider>
  );
}

export function UserGreeting() {
  const name = useContext(UserContext);
  return <h2>გამარჯობა, {name}</h2>;
}