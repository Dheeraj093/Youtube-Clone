
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyA_OHtJRYQgzzUNP-6yisx2jgRTCGjIN-Y",
  authDomain: "fir-78cd4.firebaseapp.com",
  projectId: "fir-78cd4",
  storageBucket: "fir-78cd4.appspot.com",
  messagingSenderId: "1074984372829",
  appId: "1:1074984372829:web:d36173817af7e134bc5bb4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app