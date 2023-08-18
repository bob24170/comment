//import firebase from "firebase/app"
//import "firebase/firestore"

//var firebaseConfig = {
  //apiKey: "AIzaSyApSxanyBb6D2IVtFCL29dHsRaq4xV2CG4",
  //authDomain: "blog-comments-995eb.firebaseapp.com",
  //databaseURL: "https://blog-comments-995eb.firebaseio.com",
 //projectId: "blog-comments-995eb",
  //storageBucket: "blog-comments-995eb.appspot.com",
  //messagingSenderId: "335918297592",
  //appId: "1:335918297592:web:30f56d162560dc1df6260d"
//}

//firebase.initializeApp(firebaseConfig)

//export const firestore = firebase.firestore()

//export default firebase





Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries

Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnNLiZcHBUxqVXT7H7xBMiFqAoo-Hr9nI",
  authDomain: "comment-66100.firebaseapp.com",
  databaseURL: "https://comment-66100-default-rtdb.firebaseio.com",
  projectId: "comment-66100",
  storageBucket: "comment-66100.appspot.com",
  messagingSenderId: "192154982574",
  appId: "1:192154982574:web:7b5cf22e8550c90eea353f"
};

Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = firebase.firestore()

export default firebase
