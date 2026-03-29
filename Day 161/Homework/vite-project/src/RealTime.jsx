import { useState } from "react";

function RealTime(){
    const [text,setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return(
        <div>
            <label htmlFor="InputField"></label>
            <input type="text" id="InputField" value={text} onChange={handleChange} placeholder="type something ig..." />
            <p>{text}</p>
        </div>

    )
}

export default RealTime;