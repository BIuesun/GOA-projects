const ColorContext = createContext('black');

function ColorProvider() {
  return (
    <ColorContext.Provider value="red">
      <ColoredText />
    </ColorContext.Provider>
  );
}

function ColoredText() {
  const color = useContext(ColorContext);
  return <p style={{ color }}>ეს ტექსტი წითელია</p>;
}