import { auth, db, database } from "../../firebase"
import { signOut } from "firebase/auth"
import { doc, getDoc, setDoc, addDoc, collection, updateDoc, Timestamp } from "firebase/firestore";
import Compress from "compress.js";
// realtime
import {ref, child, push, update  } from "firebase/database";
// upload file with file ref and file

export const writeRTD = (collectionName, data) => {
    const newDataKey = push(child(ref(database), collectionName)).key;
    console.log(data, newDataKey);
    const updates = {};
    updates[`/${collectionName}/` + newDataKey] = data;
    console.log(updates);
    return update(ref(database), updates);
}

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
        // console.log(userdata.data());
        return userdata.data();
    } else {
        throw new Error("Something wrong while reading userdata")
    }
}

export const setDataWithID = async (collection,id,data)=>{
    await setDoc(doc(db, collection, id), data);
}
export const setData = async (collectionName,data)=>{
    const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        dateExample: Timestamp.fromDate(new Date())
    });
    // console.log(docRef.id);
    return docRef.id;
}

export const updateDocByCollection = async (collectionName, id, data) =>{
    
    const docRef = doc(db, collectionName, id);
    try{
        await updateDoc(docRef, data);
        console.log("hua");
    }catch(err){
        console.log(err);
        throw new Error(err)
    }
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

export const timeSince = (date) => {
    
    let seconds = Math.floor((new Date() - date) / 1000);
  
    let interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
