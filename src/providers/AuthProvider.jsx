import { createContext, useEffect } from "react";
import app from "./../configs/firebase.config";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { PropTypes } from "prop-types";
import axios from "axios";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // register with email
  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update username and photo url
  const updateNameAndPhotoUrl = (name, url) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    })
      .then(() => {})
      .catch(() => {});
  };

  // log in with email
  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // handle authentication with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // monitoring user state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axios
          .post(
            "http://localhost:5000/jwt",
            loggedUser,
            { withCredentials: true }
          )
          .then((res) => {
            console.log("token response", res.data);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user]);

  // providing info
  const authInfo = {
    user,
    loading,
    createUserWithEmail,
    updateNameAndPhotoUrl,
    signInWithGoogle,
    signInWithEmail,
    logOut,
    isDarkMode,
    setIsDarkMode,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
