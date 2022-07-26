import React from "react"
import ChildC from "./ChildC"

function ChildB({firstName, lastName}){
    return (
        <>
        <h1>This is B and its Child is C </h1>
        <ChildC firstName = {firstName} lastName = {lastName} />
        </>
    )
}

export default ChildB