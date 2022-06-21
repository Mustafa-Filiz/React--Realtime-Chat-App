import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from ".";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export async function signUp(
  email: string,
  password: string,
  displayName: string
) {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("🤖 ~ user", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log("🤖 ~ errorCode", errorCode);
      const errorMessage = error.message;
      console.log("🤖 ~ errorMessage", errorMessage);
      // ..
    });

  const { currentUser } = auth;
  if (!currentUser) return;
  await updateProfile(currentUser, { displayName });
  console.log(currentUser);
}

export function signIn(email: string, password: string): void {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("🤖 ~ user", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log("🤖 ~ errorCode", errorCode);
      const errorMessage = error.message;
      console.log("🤖 ~ errorMessage", errorMessage);
    });
}

export function observer(): any {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      return user
      // ...
    } else {
      // User is signed out
      // ...
      return null;
    }
  });
}
