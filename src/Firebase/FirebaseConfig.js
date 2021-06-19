import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAwLMvRTba6LWHaTCVvG_Lfo7ifXQry91c",
    authDomain: "bold-cable-313923.firebaseapp.com",
    projectId: "bold-cable-313923",
    storageBucket: "bold-cable-313923.appspot.com",
    messagingSenderId: "707798527987",
    appId: "1:707798527987:web:dfa715b1d645cd7326ac86"
};

firebase.initializeApp(firebaseConfig)

export const auth  = firebase.auth() 
export const firestore = firebase.firestore()
const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)