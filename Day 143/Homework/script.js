const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [text, setText] = React.useState("hello");

  function changeText() {
    setText("Goodbye!");
  }

  return (
    <div className="textChanger">
      <h1>{text}</h1>
      <button className="btn" onClick={changeText}>Press to change text</button>
    </div>
  );
}
function Count(){
    const [count,setCount] = React.useState(0);

    function increase(){
        setCount(count + 1);
    }
    function decrease(){
        setCount(count - 1);
    }

    return(
        <div className="Counter">
            <h1>{count}</h1>
            <button className="btn" onClick={increase}>increase</button>
            <button className="btn" onClick={decrease}>decrease</button>
        </div>
    )
}

function ChangeBackground(){
    const [color,setColor] = React.useState("lightblue");

    function changeColor() {
        const prevColor = color;
        setColor("lightcoral")
        setInterval(() => {
            setColor(prevColor);
        }, 1000);
    }


    return(
        <div className="BackgroundChanger"style={{backgroundColor:color}}>
            <button className="btn" onClick={changeColor}>Press to Change color</button>
        </div>
    )
}
root.render(
<>
<App />
<Count />
<ChangeBackground />
</>

);
