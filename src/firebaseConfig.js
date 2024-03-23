// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9iY3qSJ43t93daJpr2WvJQxQiQQ3bF8c",
  authDomain: "pagina-pizzeria-test.firebaseapp.com",
  projectId: "pagina-pizzeria-test",
  storageBucket: "pagina-pizzeria-test.appspot.com",
  messagingSenderId: "188328105671",
  appId: "1:188328105671:web:64b8eb11d5beaa5f77d0e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const ddbb = getFirestore(app);
