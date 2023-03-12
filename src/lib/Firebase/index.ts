// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqEm1IkwHu2WE6OB7ST2rKXAfmIZOK00E",
  authDomain: "react-realtime-chat-app-a5c7e.firebaseapp.com",
  projectId: "react-realtime-chat-app-a5c7e",
  storageBucket: "react-realtime-chat-app-a5c7e.appspot.com",
  messagingSenderId: "333150420448",
  appId: "1:333150420448:web:b50f3778c59e7a57303f85",
  measurementId: "G-0PH3GCM920",
  databaseURL:
    "https://react-realtime-chat-app-a5c7e-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export { db };
