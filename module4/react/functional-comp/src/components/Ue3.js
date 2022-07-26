import { useEffect, useState } from "react"



function Ue3(){
    // use state 
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Dheeraj");

    // useEffect
    useEffect(()=>{
        document.title = `this is ${count} ${name}`;
    },[count])
    // this work for both componentDidMount and componenetDidUpdate
    // Q how to do for one ??
    return(
        <>
        <h1>This is a counter {count}</h1>
        <button onClick={()=>setCount(count+1)}>+1</button>
        <button onClick={()=>setName("Dev")}>change</button>
        </>
    )
}

export default Ue3