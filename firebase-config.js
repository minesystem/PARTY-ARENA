import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbPs3-ZIbUajlpY11FNYqLWBV6VmYCErA",
  authDomain: "party-arena-fef84.firebaseapp.com",
  projectId: "party-arena-fef84",
  storageBucket: "party-arena-fef84.firebasestorage.app",
  messagingSenderId: "800123060271",
  appId: "1:800123060271:web:9d6af7ae981464420506da"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
