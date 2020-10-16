import firebase from "firebase/app";

const firebaseConfig = {
        apiKey: "AIzaSyA1fzRK8-n-vgKJ3rDnaumM0iw0he7LizQ",
        authDomain: "gradisoft-8427e.firebaseapp.com",
        databaseURL: "https://gradisoft-8427e.firebaseio.com",
        projectId: "gradisoft-8427e",
        storageBucket: "gradisoft-8427e.appspot.com",
        messagingSenderId: "326296797282",
        appId: "1:326296797282:web:a1a33dd9851d00d755513b"
};
// Initialize Firebase

export default  firebase.initializeApp(firebaseConfig);