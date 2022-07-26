
import { createContext, useState } from "react";
import Parent from "./Parent";
export const msgContext = createContext("hello")

function ContextMemo(){
    const [msg, setMsg] = useState("fake message");
    const updateMsg = ()=>{
        setMsg("Original message lorem ")
    }
    console.log("ContextMemo is rander");
    return (
        <>
            <h1>This is Context Normal</h1>
            <button onClick={updateMsg} >Change Message</button>
            <msgContext.Provider value={msg} >
                <Parent>  </Parent>
            </msgContext.Provider>
        </>
    )
}

export default ContextMemo