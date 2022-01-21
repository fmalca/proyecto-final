import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA0qAnaTCcAwcCV7SJRtvjntSWThCNG6NY",
  authDomain: "items-react-project.firebaseapp.com",
  projectId: "items-react-project",
  storageBucket: "items-react-project.appspot.com",
  messagingSenderId: "970199912918",
  appId: "1:970199912918:web:02f22dbd68a724becd1477"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => app;