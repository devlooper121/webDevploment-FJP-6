import { auth } from "../../firebase"
import { signOut } from "firebase/auth"

export const logOut = async () => {
    try {
        await signOut(auth);
    } catch (err) {
        console.log(err.message);
    }
}