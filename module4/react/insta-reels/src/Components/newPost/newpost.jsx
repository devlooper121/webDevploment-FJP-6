import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { NavBar } from "../NavBar/NavBar"

import styles from "./newPost.module.css"


const NewPost = (props) => {
    const [videoUrl, setVideoUrl] = useState("");
    // const [videoFile, setVideoFile] = useState(null);
    const videoInputHandler = (e) => {

        // console.log(e.target.files);
        const file = e.target.files[0];
        if(file && file.type.includes("video")){
            setVideoUrl(URL.createObjectURL(file))

        }else{
            alert("Only upload video file");
        }
        // console.log(file.type.includes("video"))
    }
    // useEffect(()=>{
    //     let fileReader, isCancel = false;
    //     if(videoFile){
            
    //         fileReader = new FileReader();
    //         // add a event listener
    //         fileReader.onload = (e) => {
    //             const result = e.target.result;
    //             if(result && !isCancel){
    //                 setVideoUrl(result);
    //             }
    //         }
    //         // use
    //         fileReader.readAsDataURL(videoFile)
    //     }
        

    //     return () =>{
    //         isCancel=true;
    //         if(fileReader && fileReader.readyState === 1){
    //             fileReader.abort();
    //         }
    //     }
    // }, [videoFile])
    return (
        <React.Fragment>
            <NavBar/>
            <div className={styles["uploadArea"]}>
               
                    <input id={styles.videoInput} type="file" accept="video/*" onChange={videoInputHandler} />
                    {videoUrl && <video src={videoUrl} className={styles.preview} controls></video>}

            </div>
        </React.Fragment>
    )
}

export default NewPost