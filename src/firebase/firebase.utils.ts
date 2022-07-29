import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";

import { CategoryType } from "../types/types";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn9_70_UePacSNOLLY-7GjGPnAU3hjjdY",
  authDomain: "sneakers-e364e.firebaseapp.com",
  projectId: "sneakers-e364e",
  storageBucket: "sneakers-e364e.appspot.com",
  messagingSenderId: "137809373800",
  appId: "1:137809373800:web:1e02382a9e3b641ccda9dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// AUTH
export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

// FIRESTORE
export const db = getFirestore();

export type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocument = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async (): Promise<CategoryType[]> => {
  const collectionRef = collection(db, "categories");

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as CategoryType
  );
};

export type AdditionalInfoType = {
  displayName?: string;
};

export type UserDataType = {
  createdAt: Date;
  displayName: string;
  email: string;
  id: string;
};

export const createUserDocFromAuth = async (
  userAuth: User,
  additionalInfo?: AdditionalInfoType
): Promise<void | QueryDocumentSnapshot<UserDataType>> => {
  if (!userAuth) return;

  // 1. Reference
  const userDocRef = doc(db, "users", userAuth.uid);

  // 2. Snapshot
  const userSnapshot = await getDoc(userDocRef);

  // 3. Make doc if user does NOT exist yet
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });

      const newUserSnapshot = await getDoc(userDocRef);

      return newUserSnapshot as QueryDocumentSnapshot<UserDataType>;
    } catch (err) {
      //a bit of a lazy error type but will do just for this
      if (err instanceof Error) {
        console.log("error creating user", err.message);
      } else {
        console.log("error creating user", err);
      }
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserDataType>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEandP = async (email: string, password: string) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);
