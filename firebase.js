import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyChUWlTEeJ6edipy083yso_ejt1jLxWGng",
    authDomain: "random-3ce1f.firebaseapp.com",
    projectId: "random-3ce1f",
    storageBucket: "random-3ce1f.appspot.com",
    messagingSenderId: "563488429240",
    appId: "1:563488429240:web:5c566aeb86a309de06904d",
    measurementId: "G-RN0G59B7K4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };