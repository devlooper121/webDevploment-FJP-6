import {msgContext} from "./ContextMemo"
import {useContext} from "react"
function GrandChild () {
    const msg = useContext(msgContext)
    console.log("Grand Child is rander");
    return (
        <>
            <h4>I am Grand Child</h4>
            <p>This is Message = {msg}</p>
        </>
    )
}

export default GrandChild
