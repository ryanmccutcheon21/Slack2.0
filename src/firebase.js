import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPeP8Z5y1-UaUWxD41mJLh_eXBtxuRiNs",
    authDomain: "slack-clone-c571c.firebaseapp.com",
    projectId: "slack-clone-c571c",
    storageBucket: "slack-clone-c571c.appspot.com",
    messagingSenderId: "100944866664",
    appId: "1:100944866664:web:d76ab1039e13af0c05badd",
    measurementId: "G-7F48J4GXYE"
};

const
    firebaseApp = firebase.initializeApp(firebaseConfig),
    db = firebaseApp.firestore(),
    auth = firebase.auth(),
    provider = new firebase.auth.GoogleAuthProvider()


export { auth, provider, db } 