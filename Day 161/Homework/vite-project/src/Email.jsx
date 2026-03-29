import { useState } from "react";

function Email(){
    const [email,setEmail] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(email.trim() === ""){
            alert("please enter Email");
            return;
        }
        alert("entered email: " + email);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">Enter Your Email</label>
            <input type="email" id="email" value={email} onChange={(e) =>{setEmail(e.target.value)}} required />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Email;