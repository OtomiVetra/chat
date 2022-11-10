import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



firebase.initializeApp({
  apiKey: "AIzaSyC2JcQakeb_S7Ki50qgU8BecujtE16I01k",
  authDomain: "chat-react-14d2d.firebaseapp.com",
  projectId: "chat-react-14d2d",
  storageBucket: "chat-react-14d2d.appspot.com",
  messagingSenderId: "568378583815",
  appId: "1:568378583815:web:d7fe049dcfbc660991b3a2",
  measurementId: "G-JG3XXN6XLS"
});

export const Context = createContext(null)


const auth = firebase.auth()
const firestore = firebase.firestore()



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);

