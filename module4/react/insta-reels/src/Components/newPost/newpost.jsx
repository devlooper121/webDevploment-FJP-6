import React from "react"
import { useState, useContext, useEffect } from "react"
import { NavBar } from "../NavBar/NavBar"
import Button from "../UI/Button"

import { AuthContext } from "../../Context/AuthContext"

import styles from "./newPost.module.css"
import ProgressBar from "./ProgressBar"
// util
import { findUserByUID } from "../functions/util"
// firebase
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
//firebase storage
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const NewPost = (props) => {
    const cUser = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);
    const [videoUrl, setVideoUrl] = useState("");
    const [videoFile, setVideoFile] = useState(null);
    // const [videoFile, setVideoFile] = useState(null);
    // upload percentage
    const [uploadPercentage, setUploadPercentage] = useState(0);
    
    useEffect(() => {
        (async () => {
            try {
                const user = await findUserByUID(cUser.uid);
                setUser(user)
                setLoding(false)
            } catch (err) {
                console.log(err.message);
                setLoding(false)
            }
        })()
    }, [])
    const videoInputHandler = (e) => {

        // console.log(e.target.files);
        const file = e.target.files[0];
        if (file && file.type.includes("video")) {
            setVideoFile(file)
            setVideoUrl(URL.createObjectURL(file))
        } else {
            alert("Only upload video file");
        }
        // console.log(file.type.includes("video"))
    }
    const uploadVideoHandler = () => {
        // getting ref of database for updating
        const docRef = doc(db, "users", cUser.uid);
        if (videoFile) {
            // const compressImage = resizeFile(videoFile);
            const metadata = {
                contentType: 'video/*'
            };

            // Upload file and metadata to the object 'images/mountains.jpg'
            const storageRef = ref(storage, `store/reels/video/${user.userId}/${Math.random().toString() + videoFile.name}`);
            const uploadTask = uploadBytesResumable(storageRef, videoFile, metadata);
            // let newvideoFileUrl = "";
            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadPercentage(progress);
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    console.error(error)
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        // const newVideoFileArr = [downloadURL, ...user.videoFileUrls]
                        // add video url in main database with all info
                        // const info = {
                        //     link:downloadURL,
                        //     userId : cUser.uid,
                        //     userName : 
                        // }
                        
                        // // updating in database of user 

                        // updateDoc(docRef, {
                        //     videoFileUrls: newvideoFileArr,
                        //     ...textData
                        // }).then(() => {
                        //     setLoding(false)
                        // }).catch((err) => {
                        //     console.log(err);
                        // })
                    });
                }
            );
        }
    }

    return (
        <React.Fragment>
            <NavBar />
            <ProgressBar value={uploadPercentage} />
            <div className={styles["uploadArea"]}>
                <div className={styles["videoFrame"]}>
                    <label htmlFor={styles.videoInput} className={styles.btn} ><span className="material-symbols-rounded">
                        {videoUrl ? "cached" : "add"}
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