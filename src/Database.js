import firebase from 'firebase';

//Get key and data from environment
const {
    REACT_APP_API_KEY,
    REACT_APP_DB_URL,
    REACT_APP_APP_ID,
    REACT_APP_PROJ_ID,
    REACT_APP_AUTH_DOMAIN,
} = process.env;

let firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    databaseURL: REACT_APP_DB_URL,
    projectId: REACT_APP_PROJ_ID,
    storageBucket: "shoptrade-21ec6.appspot.com",
    messagingSenderId: "214757467231",
    appId: REACT_APP_APP_ID,
    measurementId: "G-HSNDGXXQ2D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;