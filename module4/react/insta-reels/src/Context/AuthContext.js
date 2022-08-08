import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext();

// jo bhi isme pass hoga / wrap hoga wo props.children me milega
export function AuthContextProvider(props) {
    const [cUser, setUser] = useState(null);
    const [mainLoder,setMainLoder] = useState(true);
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }else{
                setUser(null);
            }
            setMainLoder(false);
        })
    }, [])

    return (
        <AuthContext.Provider value={cUser}>
            {mainLoder === false && props.children // show children only if mainloder is false
            }
        </AuthContext.Provider>
    )
}