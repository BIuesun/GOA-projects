const root = ReactDOM.createRoot(document.getElementById("root"));

function App(){
    const [text,setText] = React.useState("Hello");
    const [count,setCount] = React.useState(0);
    const [state,setState] = React.useState("visible");
    function changeText(){
        setText("World")
    }
    function increase(){
        setCount(count + 1);
    }
    function decrease(){
        setCount(count - 1);
    }
    function reset(){
        setCount(0);
    }
    function showText(){
        setState("visible")
    }
    function hideText(){
        setState("hidden")
    }
    return (
        <div className="parent-div">
            <div className="text-div">
                <p className="text-area">{text}</p>
                <button className="btn" onClick={changeText}>Click to change text</button>
            </div>

            <div className="counter-div">
                <p className="counter-p">{count}</p>
                <button className="btn" onClick={increase}>Increase</button>
                <button className="btn" onClick={decrease}>Decrease</button>
                <button className="btn" onClick={reset}>Reset</button>
            </div>

            <div className="showHide">
                <p className="showHide-text" style={{visibility:state}}>Randommm</p>
                <button className="btn" onClick={showText}>Show</button>
                <button className="btn" onClick={hideText}>Hide</button>
            </div>
        </div>

        
    )
}

root.render(
    <>
    <App />
    </>
)