import { useContext, useState } from "react"

import { auth } from "../firebase"
import { signInWithEmailAndPassword, signOut } from "firebase/auth"


// import for global login information from AuthContext.js 
import { AuthContext } from "../Context/AuthContext"
import { useEffect } from "react"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // states for login, 1.Loding, 2.Error, 3.userFound
    const [loder, setLoder] = useState(false);
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);
    // const [mainLoder, setML] = useState(true) // now we use from AuthContext.js
    // using AuthContext 
    const cUser = useContext(AuthContext);
    
    const trackEmail = (e) => {
        setEmail(e.target.value)
    }
    const trackPassword = (e) => {
        setPassword(e.target.value)
    }
    const alertMe = async () => {
        try {
            setLoder(true)
            const userCredentials = await signInWithEmailAndPassword(auth, email, password)
            setUser(userCredentials.user)
            setLoder(false)
        } catch (err) {
            setLoder(false)
            setError(err.message);
            setTimeout(() => {
                setError("")
            }, 2000)
        }
    }

    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           // User is signed in, see docs for a list of available properties
    //           // https://firebase.google.com/docs/reference/js/firebase.User
    //           setUser(user)
    //           // ...
    //         } else {
    //           // User is signed out
    //           // ...
    //           setUser(null)
    //         }
    //       });
          
    // },[])

    useEffect(()=>{
        if(cUser){
            setUser(cUser)
        }
    }, [cUser])

    const logOut = async () => {
        try {
            setLoder(true)
            await signOut(auth);
            setUser(null)
        } catch (err) {
            setError(err.message)
            setTimeout(() => {
                setError("")
            }, 2000)
        }
        setLoder(false)
    }
    return (
        <>
            {/* { mainLoder === true ?<> Loding information ...</> : // now using from Auth context */} 
            {loder === true ? <h1> Loding... </h1> :
                error !== "" ? <h1>error msg {error}</h1> :
                    user != null ? <><h1> User is {user.uid} Successfully loged in </h1>
                        <button type="click" onClick={logOut}>logout</button>
                    </> :

                        <>
                            <input type="email" placeholder="email" onChange={trackEmail}></input>
                            <br />
                            <input type="password" placeholder="password" onChange={trackPassword}></input>
                            <br />
                            <button type="click" onClick={alertMe}>submit</button>

                        </>
            }


        </>
    )
}
export default Login