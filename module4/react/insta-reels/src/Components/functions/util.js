import { auth } from "../../firebase"
import { signOut } from "firebase/auth"
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import Compress from "compress.js";
// upload file with file ref and file
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

export const logOut = async () => {
    try {
        await signOut(auth);
    } catch (err) {
        console.log(err.message);
    }
}

// find user function

export const findUserByUID = async (uid) => {
    const docRef = doc(db, "users", uid);
    const userdata = await getDoc(docRef);
    if (userdata.exists()) {
        // console.log(userdata);
        return userdata.data();
    } else {
        throw new Error("Something wrong while reading userdata")
    }
}




export const uploadFileByRef = (fileRef, file, getUploadPercentage, getError) => {

    let uploadPercentage = 0;
    let error = null;

    const storageRef = ref(storage, fileRef);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const pause = () => {
        uploadTask.pause();
    }
    const resume = () => {
        uploadTask.resume();
    }
    const cancel = () => {
        uploadTask.cancel();
    }
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            getUploadPercentage(progress);
            console.log('Upload is ' + progress + '% done');
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
            // Handle unsuccessful uploads
            getError(error.code);
        },
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
            });
        }
    );
}

const compress = new Compress();

export const resizeFile = async (file) => {
    const resizedImage = await compress.compress([file], {
        size: 2, // the max size in MB, defaults to 2MB
        quality: 1, // the quality of the image, max is 1,
        maxWidth: 300, // the max width of the output image, defaults to 1920px
        maxHeight: 300, // the max height of the output image, defaults to 1920px
        resize: true // defaults to true, set false if you do not want to resize the image width and height
    })
    const img = resizedImage[0];
    const base64str = img.data
    const imgExt = img.ext
    const resizedFiile = Compress.convertBase64ToFile(base64str, imgExt)
    return resizedFiile;
};