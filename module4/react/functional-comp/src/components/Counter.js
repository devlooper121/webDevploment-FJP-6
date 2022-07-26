import {useState} from "react"

let Counter= ()=>{
    const [count, setCounter] = useState(0);
    const [text, changeText] = useState("");
    return (
        <>
            <h1> Counter : {count} </h1>
            <button onClick={()=>setCounter(count+1)}>+</button>
            <button onClick={()=>setCounter(count-1)}>-</button>
            <input type={"text"} value={text} onChange={(e)=>changeText(e.target.value)}></input>
            <p>{text}</p>
        </>
    )
}


export default Counter
