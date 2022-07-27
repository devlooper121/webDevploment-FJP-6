import { useState } from "react"

import { auth, db } from "../firebase"
import { createUserWithEmailAndPassword, signOut } from "firebase/auth"
import {setDoc, doc} from "firebase/firestore"

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const [error, setError] = useState("")
    const [user, setUser] = useState(null)
    const [loder, setLoder] = useState(false)


    const processSignUp = async () => {
        try {
            setLoder(true)
            const userCred = await createUserWithEmailAndPassword(auth, email, password)
            setUser(userCred.user)
            await setDoc(doc(db, "users",userCred.user.uid),{
                email,
                name,
                postIds: [],
                userId : userCred.user.uid,
                profileImgUrl:""
            })
        } catch (err) {
            setError(err.message)
        }
        setLoder(false)
    }

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
            {loder === true ? <h1>loding...</h1> :
                error !== "" ? <h1>{error}</h1> :
                    user != null ? <><h1> User is {user.uid} Successfully loged in </h1>
                    <button type="click" onClick={logOut}>logout</button>
                </> :
                        <>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"></input>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name"></input>
                            <button type="click" onClick={processSignUp} >Suign Up</button>
                        </>}
        </>
    )
}

export default Signup