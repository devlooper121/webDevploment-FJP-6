import React from "react"
import ChildB from "./ChildB"

function ChildA({firstName, lastName}){
    return (
        <>
        <h1>This is A and its Child is B </h1>
        <ChildB firstName = {firstName} lastName = {lastName} />
        </>
    )
}

export default ChildA