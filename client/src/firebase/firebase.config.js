// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};
console.log(process.env.REACT_APP_API_KEY);
// const firebaseConfig = {
//   apiKey: "AIzaSyDVbSLNPbZKgIDhJyopC2AgRUZjJxdErWE",
//   authDomain: "car-service-41e62.firebaseapp.com",
//   projectId: "car-service-41e62",
//   storageBucket: "car-service-41e62.appspot.com",
//   messagingSenderId: "455113931349",
//   appId: "1:455113931349:web:9466dfe2fc6e718ee6b2dc",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
