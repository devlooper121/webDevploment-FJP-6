import { auth } from "../../firebase"
import { signOut } from "firebase/auth"
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import Compress from "compress.js";

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

// upload file with file ref and file

export const uploadFileByRef = (ref, file) => {
    
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