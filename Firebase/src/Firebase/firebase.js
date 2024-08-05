// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANj1OsXebPeyi_LqnrxI1UCg75AO_QhFs",
  authDomain: "fullstack10-edc0d.firebaseapp.com",
  projectId: "fullstack10-edc0d",
  storageBucket: "fullstack10-edc0d.appspot.com",
  messagingSenderId: "241359803684",
  appId: "1:241359803684:web:6255af56413b268494cfb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)