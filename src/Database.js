import firebase from 'firebase';
let firebaseConfig = {
    apiKey: "AIzaSyBXGOs9rOR6qDluCIHzHbr76t3F-MF2Pss",
    authDomain: "shoptrade-21ec6.firebaseapp.com",
    databaseURL: "https://shoptrade-21ec6.firebaseio.com",
    projectId: "shoptrade-21ec6",
    storageBucket: "shoptrade-21ec6.appspot.com",
    messagingSenderId: "214757467231",
    appId: "1:214757467231:web:6783ad05bef68e4de767ea",
    measurementId: "G-HSNDGXXQ2D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;