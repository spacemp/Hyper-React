import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCutZKP7VwoMjloFLBg99LKZZguZpG8cjg",
    authDomain: "eshop-553aa.firebaseapp.com",
    projectId: "eshop-553aa",
    storageBucket: "eshop-553aa.appspot.com",
    messagingSenderId: "1078590134316",
    appId: "1:1078590134316:web:d2cbed280c73a909fa5989",
    measurementId: "G-XTQC8NTNCP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

