import { useContext } from "react";
import { createContext, useState } from "react";

const msgContext = createContext("hello")

function ContextNormal(){
    const [msg, setMsg] = useState("fake message");
    const updateMsg = ()=>{
        setMsg("Original message lorem ")
    }
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

function Parent() {
    return (
        <>
            <h2>I am parent</h2>
            <Child></Child>
        </>
    )
}

function Child() {
    return (
        <>
            <h3>I am child</h3>
            <GrandChild></GrandChild>
        </>
    )
}

function GrandChild () {
    const msg = useContext(msgContext)
    return (
        <>
            <h4>I am Grand Child</h4>
            <p>This is Message = {msg}</p>
        </>
    )
}

export default ContextNormal