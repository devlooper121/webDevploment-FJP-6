import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { NavBar } from "../NavBar/NavBar"
import Button from "../UI/Button"

import styles from "./newPost.module.css"


const NewPost = (props) => {
    const [videoFile, setVideoFile] = useState("");
    const videoUrl = ""
    // const [videoFile, setVideoFile] = useState(null);
    const videoInputHandler = (e) => {

        // console.log(e.target.files);
        const file = e.target.files[0];
        if (file && file.type.includes("video")) {
            videoUrl = URL.createObjectURL(file)
            setVideoFile(file)
        } else {
            alert("Only upload video file");
        }
        // console.log(file.type.includes("video"))
    }
    const uploadVideoHandler = () => {
        
    }
    
    return (
        <React.Fragment>
            <NavBar />
            <div className={styles["uploadArea"]}>
                <div className={styles["videoFrame"]}>
                    <label htmlFor={styles.videoInput} className={styles.btn} ><span className="material-symbols-rounded">
                        {videoUrl ? "cached":  "add"}
                    </span></label>
                    <input id={styles.videoInput} type="file" accept="video/*" onChange={videoInputHandler} />
                    {videoUrl && <video src={videoUrl} className={styles.preview} controls></video>}
                    {videoUrl && <Button onClick={uploadVideoHandler}><span className="material-symbols-rounded">
                        file_upload
                    </span></Button>}
                </div>

            </div>
        </React.Fragment>
    )
}

export default NewPost