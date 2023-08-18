import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyDnNLiZcHBUxqVXT7H7xBMiFqAoo-Hr9nI",
  authDomain: "comment-66100.firebaseapp.com",
  databaseURL: "https://comment-66100-default-rtdb.firebaseio.com",
 projectId: "comment-66100",
  storageBucket: "comment-66100.appspot.com",
  messagingSenderId: "192154982574",
  appId: "1:192154982574:web:7b5cf22e8550c90eea353f"
}

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase





