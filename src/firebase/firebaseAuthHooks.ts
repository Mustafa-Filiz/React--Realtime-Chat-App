import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { app } from ".";
import { setUser } from "../app/userSlice";
import { useLocalStorage } from "../utils/hooks/useLocalStorage";

export const useFirebaseHooks = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const { setValue } = useLocalStorage();
  const dispatch = useDispatch();

  const signUp = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        user.getIdToken().then((token) => {
          const {
            displayName,
            email,
            photoURL,
            uid,
            phoneNumber,
            refreshToken,
          } = user;
          dispatch(
            setUser({
              displayName,
              email,
              photoURL,
              uid,
              phoneNumber,
              refreshToken,
            })
          );
          setValue("chit-chat-app-token", token);
          navigate("/");
        });
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
  };

  const signIn = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.getIdToken().then((token) => {
          const {
            displayName,
            email,
            photoURL,
            uid,
            phoneNumber,
            refreshToken,
          } = user;
          dispatch(
            setUser({
              displayName,
              email,
              photoURL,
              uid,
              phoneNumber,
              refreshToken,
            })
          );
          setValue("chit-chat-app-token", token);
          navigate("/");
        });
        console.log("🤖 ~ user", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log("🤖 ~ errorCode", errorCode);
        const errorMessage = error.message;
        console.log("🤖 ~ errorMessage", errorMessage);
      });
  };

  const observer = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const { displayName, email, photoURL, uid, phoneNumber, refreshToken } =
          user;
        dispatch(
          setUser({
            displayName,
            email,
            photoURL,
            uid,
            phoneNumber,
            refreshToken,
          })
        );
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(setUser(null));
      }
    });
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const { displayName, email, photoURL, uid, phoneNumber, refreshToken } =
          result.user;
        dispatch(
          setUser({
            displayName,
            email,
            photoURL,
            uid,
            phoneNumber,
            refreshToken,
          })
        );
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return { signUp, signIn, signInWithGoogle, observer };
};
