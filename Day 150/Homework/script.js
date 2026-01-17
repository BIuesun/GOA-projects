const root = ReactDOM.createRoot(document.getElementById("root"));
const { useState } = React;

function App() {
    const [inpValue, setInpValue] = useState("");
    const handleChange = (e) => {
        setInpValue(e.target.value);
    };

    const [fruits, setFruits] = useState(["apple", "banana", "kiwi"]);

    const [taskInput, setTaskInput] = useState("");
    const [tasks, setTasks] = useState(["wake up"]);

    function addTask(e) {
        e.preventDefault();

        if (taskInput.trim() === "") return;

        setTasks([...tasks, taskInput]);
        setTaskInput("");
    }

    return (
        <div className="main-container" style={{ backgroundColor: "gray" }}>
            <form>
                <label>
                    Text:
                    <input type="text" value={inpValue} onChange={handleChange} />
                </label>
                <p className="outputArea">Live input: {inpValue}</p>
            </form>

            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>

            <form onSubmit={addTask}>
                <label>
                    Task:
                    <input
                        type="text"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                    />
                </label>

                <button type="submit">Submit</button>

                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </form>
        </div>
    );
}

root.render(<App />);
