import React, { useContext } from "react"
import { context } from "./Parent";

function ChildC({firstName, lastName}){
    const {number} = useContext(context);
    return (
        <>
        <h1>This is C </h1>
        <h1> lastName = {lastName} </h1>
        <h1> firstName = {firstName} num = {number}</h1>
        </>
    )
}

export default ChildC