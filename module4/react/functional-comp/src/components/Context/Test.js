import React, { useContext, useState } from "react";

let context = React.createContext(null);

function Test() {

    const [firstName, setFN] = useState("Dheeraj")
    const [lastName, setLN] = useState("Shrivastva")

    return(
        <context.Provider value={{firstName, lastName}} >
            <ChildA/>
        </context.Provider>
    )

}

function ChildA () {
    return (
        <>
            <h1>this is child component A</h1>
            <ChildB/>
        </>
    )
}

function ChildB () {
    return (
        <>
            <h1>this is child component B</h1>
            <ChildC/>
        </>
    )
}
function ChildC () {
    const {firstName, lastName} = useContext(context);
    return (
        <>
            <h1>this is child component C</h1>
            <h3> firstName = {firstName}, lastName = {lastName} </h3>
        </>
    )
}

export default Test