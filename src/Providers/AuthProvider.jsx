import { createContext, useEffect, useState } from "react";
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
import app from "../Firebase/firebase.config";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const auth = getAuth(app);
export const AuhtContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider ()

  const axiosPublic = UseAxiosPublic()

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }


  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }




  const updateUserProfile = (name,photo)=>{
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })

  } 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current User", currentUser);
      if (currentUser) {
        // If a user is logged in
        const userInfo = { email: currentUser.email }; // Prepare the user info with the current user's email
        
        // Send a POST request to the /jwt endpoint with the user's email
        axiosPublic.post('/jwt', userInfo)
          .then(res => {
            // If the response contains a token
            if (res.data.token) {
              // Store the token in local storage
              localStorage.setItem('access-token', res.data.token);
            }
          });
      } else {
        // If no user is logged in
        // Remove any existing token from local storage
        localStorage.removeItem('access-token');
      }
      
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn
  };
  return (
    <AuhtContext.Provider value={authInfo}>{children}</AuhtContext.Provider>
  );
};

export default AuthProvider;
