import "./profile.css"
import React, {useContext, useState} from "react"

// Context import from AuthContext.js for logged user info and main loder
import {AuthContext} from "../Context/AuthContext"


function Profile() {
    const cUser = useContext(AuthContext);
    const [loding, setLoding] = useState("")
    
    return (
        <>
        {cUser != null ? <>logged in User : {cUser.uid}</>:
        <>login again</>}
        </>
        // <>
        //     <div className="header"></div>
        //     <div className="main">
        //         <div className="pimg-container">
        //             <img className="pimg" src="https://i.pinimg.com/474x/ee/08/a5/ee08a5be6523b9b9d0e0862acd73210c.jpg" alt="profile img" />
        //         </div>
        //         <div className="details">
        //             <div className="content">Dheeraj</div>
        //             <div className="content">No of post <bold className="bold">0</bold></div>
        //             <div className="content">Email <em className="bold" >email.com</em></div>
        //         </div>
        //     </div>
        // </>
    )
}

export default Profile