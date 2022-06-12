import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
// import "firebase/storage";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCQATUYAEUlE27f8cE5pN13bxpk6GRLlOo",
    authDomain: "form-clone-9.firebaseapp.com",
    databaseURL: "https://form-clone-9-default-rtdb.firebaseio.com",
    projectId: "form-clone-9",
    storageBucket: "form-clone-9.appspot.com",
    messagingSenderId: "110861785171",
    appId: "1:110861785171:web:75ca1b795759bd6a058ea6"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ACTION--------------------------------------------------------------

// sign in
export const signInToDatabase = (email, password) =>
  new Promise((resolve, reject) =>
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => resolve(userCredential.user))
      .catch((error) => reject(error))
  );

// sign up
export const signUpToDatabase = (email, password) =>
  new Promise((resolve, reject) =>
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => resolve(userCredential.user))
      .catch((error) => reject(error))
  );

// post
export const postDataToDatabase = (path, data) =>
  new Promise((resolve, reject) =>
    firebase
      .database()
      .ref(path)
      .push(data)
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  );

// set
export const setDataToDatabase = (path, data) =>
  new Promise((resolve, reject) =>
    firebase
      .database()
      .ref(path)
      .set(data)
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  );

// get
export const getDataFromDatabase = (path) =>
  new Promise((resolve, reject) =>
    firebase
      .database()
      .ref(path)
      .on("value", (snapshot) =>
        snapshot.val()
          ? resolve(snapshot.val())
          : reject("data not found or database error")
      )
  );

// delete
export const deleteDataDatabase = (path) =>
  new Promise((resolve, reject) =>
    firebase
      .database()
      .ref(path)
      .remove()
      .then(() => resolve(true))
      .catch((e) => reject(e))
  );
