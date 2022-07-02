import { initializeApp } from 'firebase/app';

const firebaseConfigProduction = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY_PRODUCTION,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_PRODUCTION,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_PRODUCTION,
  storageBucket: 'lofty-6084d.appspot.com',
  messagingSenderId: '794653263720',
  appId: '1:794653263720:web:258f1b2a25a97c600878dd',
  measurementId: 'G-KW2596XQFT',
};

const firebaseConfigDev = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY_DEV,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_DEV,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_DEV,
  storageBucket: 'portfolio-e97aa.appspot.com',
  messagingSenderId: '77888796475',
  appId: '1:77888796475:web:64ee149aed0b4f734a291e',
  measurementId: 'G-79EVEP15Y0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfigProduction);

export { app };
