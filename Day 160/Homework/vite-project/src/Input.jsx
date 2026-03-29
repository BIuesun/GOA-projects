import { use } from "react";
import { useId,useState } from "react";

function TwoStates(){
    // form1 ids
    const nameId = useId();
    const emailId = useId();

    // form2 ids
    const usernameId = useId();
    const passwordId = useId();

    const [form1,setForm1] = useState({name: "", email: ""});
    const [form2,setForm2] = useState({username: "", password: ""});

    return(
        <div>
            <h2>form 1 - personal info</h2>
            <div>
                <label htmlFor={nameId}>Full Name</label>
                <input type="text" id={nameId} value={form1.name} onChange={(e) => setForm1({...form1, name: e.target.value})}/>
            </div>
            
            <div>
                <label htmlFor={emailId}>Email</label>
                <input type="email" id={emailId} value={form1.email} onChange={(e) =>  setForm1({...form1, email: e.target.value})} /> 
            </div>

            <h2>form 2 - account</h2>
            <div>
                <label htmlFor={usernameId}>User</label>
                <input type="text" id={usernameId} value={form2.username} onChange={(e) => setForm2({...form2, username: e.target.value})} />                
            </div>

            <div>
                <label htmlFor={passwordId}>Password</label>
                <input type="password" id={passwordId} value={form2.password} onChange={(e) => setForm2({...form2, password: e.target.value})} />
            </div>
        </div>

        
    )
}

export default TwoStates;