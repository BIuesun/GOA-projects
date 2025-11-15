function Header() {
  const headerStyle = {
    background: "#4a90e2",
    padding: "20px",
    borderRadius: "10px",
    fontSize: "24px",
    color: "white",
    textAlign: "center"
  };

  return <header style={headerStyle}>This is Header</header>;
}

function MainSection() {
  const [text, setText] = React.useState("Original Main Text");

  const mainStyle = {
    background: "#d2f8d2",
    padding: "20px",
    borderRadius: "10px",
    fontSize: "20px",
    marginTop: "20px",
    textAlign: "center"
  };

  const imgStyle = {
    width: "200px",
    height: "auto",
    marginTop: "10px",
    borderRadius: "10px"
  };

  return (
    <main style={mainStyle}>
      <p>{text}</p>
      <img src="https://via.placeholder.com/200" style={imgStyle} />
      <button onClick={() => setText("Text changed!")}>Change Text</button>
    </main>
  );
}

function Footer() {
  const footerStyle = {
    background: "#ffcccb",
    padding: "20px",
    borderRadius: "10px",
    fontSize: "18px",
    marginTop: "20px",
    textAlign: "center"
  };

  return <footer style={footerStyle}>This is Footer</footer>;
}

function Boxes() {
  const boxStyle = {
    background: "lightgray",
    width: "300px",
    height: "300px",
    padding: "20px"
  };

  const innerStyle = {
    background: "white",
    width: "200px",
    height: "200px",
    padding: "20px"
  };

  const innerInnerStyle = {
    background: "lightblue",
    width: "100px",
    height: "100px"
  };

  return (
    <div style={boxStyle}>
      <div style={innerStyle}>
        <div style={innerInnerStyle}></div>
      </div>
    </div>
  );
}

function ColorList() {
  const colors = ["red", "green", "blue"];

  return (
    <ul>
      {colors.map((color, index) => (
        <li key={index}>{color}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <Boxes />
      <ColorList />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
