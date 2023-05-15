// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAcMOx-_WWdKtHZkHxsuEj7EiNqZVk-Rrw",
//   authDomain: "cheezious-backend-admin.firebaseapp.com",
//   projectId: "cheezious-backend-admin",
//   storageBucket: "cheezious-backend-admin.appspot.com",
//   messagingSenderId: "256064544043",
//   appId: "1:256064544043:web:1985e86e947f8ebc0bb96e",
//   measurementId: "G-P2QG9JEN48",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDk_n4p1Yd1a4EZC5Ms9wrv_9bxvoB27uc",
  authDomain: "cheezious-dev.firebaseapp.com",
  projectId: "cheezious-dev",
  storageBucket: "cheezious-dev.appspot.com",
  messagingSenderId: "1041791921692",
  appId: "1:1041791921692:web:1b9de64637a42b8f7d79d9",
  measurementId: "G-TY1L0PW3RP",
};

export const firebaseAppInit = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
};
