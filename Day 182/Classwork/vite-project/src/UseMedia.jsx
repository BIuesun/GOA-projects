import { useState,useEffect } from "react";

function useMedia(query){
    const [match,setMatch] = useState(false);

    useEffect(()=>{
        const media = window.matchMedia(query);

        setMatch(media.matches);

        const handleChange = ()=>{
            setMatch(media.matches);
        }
        
        media.addEventListener("change",handleChange);

        return () =>{
            media.removeEventListener("change", handleChange);
        }

    },[query]);
    return match
}

export default useMedia