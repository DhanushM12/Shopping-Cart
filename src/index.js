import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_NUCCZNB5DRcNbo25yg0dHp47VHIF0kM",
  authDomain: "cart-81d16.firebaseapp.com",
  databaseURL: "https://cart-81d16.firebaseio.com",
  projectId: "cart-81d16",
  storageBucket: "cart-81d16.appspot.com",
  messagingSenderId: "838841584508",
  appId: "1:838841584508:web:efc55b92a6f9473b84b2f9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
