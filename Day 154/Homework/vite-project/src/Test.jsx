import { useEffect } from "react";

function Test(){
    useEffect(()=>{
        console.log("Mounted")
    },[])
}


export default Test;