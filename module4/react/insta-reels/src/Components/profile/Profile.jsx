import "./profile.css"
import React, { useContext, useState } from "react"

// Context import from AuthContext.js for logged user info and main loder
import { AuthContext } from "../../Context/AuthContext"
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { NavBar } from "../NavBar/NavBar";
import LoderProfile from "./profileloder";

function Profile() {
    const cUser = useContext(AuthContext);
    const [loding, setLoding] = useState(true);
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            if (cUser) {
                // read from database
                const docRef = doc(db, "users", cUser.uid);
                const userdata = await getDoc(docRef);
                if (userdata.exists()) {
                    console.log(userdata.data())
                    setUser(userdata.data())
                } else {
                    console.log("NO DATA");
                }
                setLoding(false);
            }
        })()
    }, [cUser])

    return (
        <><NavBar></NavBar>
            {loding === true ? <div className="profile-loder"><LoderProfile/></div> :

                <>  
                    <div className="profile-box">
                        <div className="profile-container">
                            <div className="pimg-container">
                                <div className="img-box">
                                    <img className="pimg" src={user.profileImgUrl || "https://idronline.org/wp-content/uploads/2021/01/Screen-Shot-2019-02-19-at-1.23.40-PM-300x300-3.jpg.webp"} alt="Profile" />
                                </div>
                            </div>
                            <div className="details">
                                <div className="content id setting">{user.userId}</div>
                                <div className="content post-array">No of post : <b className="bold">{user.postIds.length}</b></div>
                                <div className="content name">{user.name}</div>
                                <div className="contact email">{user.email}</div>
                            </div>
                        </div>
                        <div className="user-post-list">
                            <ul className="post-nav">
                                <li className="post-nav-btn"><span class="material-symbols-rounded small">
                                    grid_on
                                </span>POSTS</li>
                                <li className="post-nav-btn"><span class="material-symbols-rounded small">
                                    bookmark
                                </span>SAVED</li>
                            </ul>
                        </div>
                        <div className="my-posts">
                            posts
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Profile