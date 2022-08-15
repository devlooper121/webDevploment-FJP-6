import React, { useEffect, useState,useContext } from "react"

import { AuthContext } from "../../../Context/AuthContext"

import { db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";

import { NavBar } from "../../NavBar/NavBar"
import styles from "./Setting.module.css";
import Loding from "../../UI/loding";
import Button from "../../UI/Button";


const ProfileSetting = () => {
    const [profileImg, setProfileImg] = useState(null);
    const [profileImgUrl, setProfileImgUrl] = useState(null);
    const cUser = useContext(AuthContext);
    const [loding, setLoding] = useState(true);
    const [user, setUser] = useState(null);

    

    useEffect(() => {
        (async () => {
            if (cUser) {
                // read from database
                const docRef = doc(db, "users", cUser.uid);
                const userdata = await getDoc(docRef);
                if (userdata.exists()) {
                    console.log(userdata.data())
                    setUser(userdata.data());
                    setProfileImgUrl(userdata.data().profileImgUrls[0])
                } else {
                    console.log("NO DATA");
                }
                setLoding(false);
            }
        })()
    }, [cUser])

    useEffect(()=>{
        if(!loding )
            setProfileImgUrl(profileImg === null ? user.profileImgUrls[0] : URL.createObjectURL(profileImg));
    },[profileImg])
    const imageInputHandler = (e) => {
        const file = e.target.files[0];
        if(file.type.includes("image")){
            setProfileImg(file);
        }
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("changed");
        if(profileImg === null){
            return;
        }
        const newProfileImgUrl = await 
        const newProfileImgArr = [newProfileImgUrl, ...user.profileImgUrl]
    }
    return (
        <React.Fragment>
            <NavBar/>
            <h1>kjkjhkjh</h1>
            {loding ? <Loding/> :
            <div className={styles.settingsPage}>
                <img src={profileImgUrl} alt="profile-preview" />

                <form onSubmit={submitHandler}>
                    <input type="file" accept="image/*" onChange={imageInputHandler}/>
                    <Button type="submit" >Save*</Button>
                </form>
            </div>}
        </React.Fragment>
    )
}


export default ProfileSetting