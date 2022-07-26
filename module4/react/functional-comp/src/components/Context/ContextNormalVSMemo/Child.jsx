
import GrandChild from "./GrandChild"

function Child() {
    console.log("Child is rander");
    return (
        <>
            <h3>I am child</h3>
            <GrandChild></GrandChild>
        </>
    )
}

export default Child
