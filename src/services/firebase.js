import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBk4hFA5-PQgdQbHmxj8huwdmnnN4PYbL4",
  authDomain: "auth-9936b.firebaseapp.com",
  projectId: "auth-9936b",
  storageBucket: "auth-9936b.appspot.com",
  messagingSenderId: "1055798290058",
  appId: "1:1055798290058:web:40e17af9509c4057232f73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const user = result.user.displayName;
      const email = result.user.email;
      const profile = result.user.photoURL;
      localStorage.setItem("user", user);
      localStorage.setItem("email", email);
      localStorage.setItem("profile", profile);
    })
    .catch((err) => {
      console.log(err);
    });
};
