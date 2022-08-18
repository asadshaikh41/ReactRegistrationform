
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
var firebaseApp=firebase.initializeApp({

  apiKey: "AIzaSyDL6lsxXZT3yVJlgMe1FZdqqKAh_rvrd9c",
  authDomain: "react-registration-form-1f681.firebaseapp.com",
  projectId: "react-registration-form-1f681",
  storageBucket: "react-registration-form-1f681.appspot.com",
  messagingSenderId: "322602237177",
  appId: "1:322602237177:web:31222909710b395e1ff628"

})

var db = firebaseApp.firestore();
export{ db }