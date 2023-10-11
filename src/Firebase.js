// import React from 'react'
import firebase from "firebase/compat/app"
import { getFirestore } from "firebase/firestore";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAXhY8Ug9UrKYhjqwPAhW8t2lIrwNeABR4",
    authDomain: "e-voting-system-f014b.firebaseapp.com",
    projectId: "e-voting-system-f014b",
    storageBucket: "e-voting-system-f014b.appspot.com",
    messagingSenderId: "202437536495",
    appId: "1:202437536495:web:ec7d6e298d22f830e8491a"
});

var db = getFirestore(firebaseApp);

export { db };
