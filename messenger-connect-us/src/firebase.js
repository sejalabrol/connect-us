import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBp-6RSfA6XWt5eMKMjsrdA7G1Yi_nEXYQ",
    authDomain: "connectusdemo-1fc90.firebaseapp.com",
    projectId: "connectusdemo-1fc90",
    storageBucket: "connectusdemo-1fc90.appspot.com",
    messagingSenderId: "810237863984",
    appId: "1:810237863984:web:c52768b97b3c11a57c65f5"
}).auth()
