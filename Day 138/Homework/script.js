function Header() {
  return <header><h1>My React Site</h1></header>;
}

function Main() {
  return (
    <main>
      <p>This is the main section</p>
      <img src="https://via.placeholder.com/200" />
      <button>Click Me</button>
    </main>
  );
}

function Footer() {
  return <footer><p>© 2025</p></footer>;
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
