import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY_DEV,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_DEV,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_DEV,
  storageBucket: "portfolio-e97aa.appspot.com",
  messagingSenderId: "77888796475",
  appId: "1:77888796475:web:64ee149aed0b4f734a291e",
  measurementId: "G-79EVEP15Y0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
