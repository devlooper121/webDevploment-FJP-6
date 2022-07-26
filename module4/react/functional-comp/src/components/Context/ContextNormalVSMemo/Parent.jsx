import Child from "./Child"
import React from "react"
function Parent() {
    console.log("Parent is rander");
    return (
        <>
            <h2>I am parent</h2>
            <Child></Child>
        </>
    )
}

export default React.memo(Parent) 