
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDDrpdDyqzEcmoEoAsF5HG1VMYzbnTCYKk",
  authDomain: "applicruit.firebaseapp.com",
  projectId: "applicruit",
  storageBucket: "applicruit.appspot.com",
  messagingSenderId: "121594049781",
  appId: "1:121594049781:web:b9c56c3a108220526001bc"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;