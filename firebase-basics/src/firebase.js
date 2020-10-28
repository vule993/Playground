import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBscmvkVSm5sKkam4fR9O3zEAHcv0OLfbw",
  authDomain: "fir-basics-753fb.firebaseapp.com",
  databaseURL: "https://fir-basics-753fb.firebaseio.com",
  projectId: "fir-basics-753fb",
  storageBucket: "fir-basics-753fb.appspot.com",
  messagingSenderId: "197385502504",
  appId: "1:197385502504:web:2405590eb81f7b78379a1d",
  measurementId: "G-06LVHZCD7G"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
