import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
//provider Firebase Authentication google

import { app } from './firebaseSetup';

const auth = getAuth(app);

const doCreateUserWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

const doSignInWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

const doSignOut = async () => {
  return await signOut(auth);
};

const doSendEmailVerification = async (user) => {
  return await sendEmailVerification(user);
};

const doSendPasswordResetEmail = async (email) => {
  return await sendPasswordResetEmail(auth, email);
};

const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

export {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
  doSignOut,
  doSendEmailVerification,
  doSendPasswordResetEmail,
  updateProfile,
  doSignInWithGoogle,
};
