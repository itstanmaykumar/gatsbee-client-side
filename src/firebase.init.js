import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDG8fzUzYuEiGvjsacEk4EBSliXTigEV44",
    authDomain: "gatsbee.firebaseapp.com",
    projectId: "gatsbee",
    storageBucket: "gatsbee.appspot.com",
    messagingSenderId: "960653545800",
    appId: "1:960653545800:web:23d1619876aae36a32637d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;