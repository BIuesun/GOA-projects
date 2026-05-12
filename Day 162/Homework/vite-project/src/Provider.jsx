import { createContext, useContext } from 'react';

const MyContext = createContext('');

function Provider() {
  return (
    <MyContext.Provider value="Hello Context">
      <Child />
    </MyContext.Provider>
  );
}

function Child() {
  const text = useContext(MyContext);
  return <h1>{text}</h1>;
}

export default Provider;