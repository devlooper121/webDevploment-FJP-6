import { useEffect, useState } from "react"



function Ue1(){
    // use state 
    const [count, setCount] = useState(0);
    // useEffect
    useEffect(()=>{
        document.title = `this is ${count} title`;
    })
    // this work for both componentDidMount and componenetDidUpdate
    // Q how to do for one ??
    return(
        <>
        <h1>This is a counter {count}</h1>
        <button onClick={()=>setCount(count+1)}>+1</button>

        </>
    )
}

export default Ue1