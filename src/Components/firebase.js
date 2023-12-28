// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVdYNJhBcFuKIWI6RfVQowt2GtYm4ofbU",
  authDomain: "fir-auth-74f77.firebaseapp.com",
  projectId: "fir-auth-74f77",
  storageBucket: "fir-auth-74f77.appspot.com",
  messagingSenderId: "287300620844",
  appId: "1:287300620844:web:9c03b028892ab6d8fe7789"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};