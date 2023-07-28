import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./assets/images/firebase";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

function googleAuth() {
    
    signInWithPopup(auth,provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(result)
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error)
    });
}
export {googleAuth}
