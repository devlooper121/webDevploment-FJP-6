import React, { useState } from "react"
import ChildA from "./ChildA"

export const context = React.createContext(null)

function Parent(){

    const [fName, setFName] = useState("Dheeraj")
    const [lName, setLName] = useState("Shrivastva")
    const [number, setNum] = useState(15)

    return (
        <context.Provider value={{number}}>
            <div style={{padding: "20px", background : "green"}}>
            <h1>This is Parent of A </h1>
            <ChildA firstName = {fName} lastName = {lName}/>
            </div>
        </context.Provider>
    )
}

export default Parent