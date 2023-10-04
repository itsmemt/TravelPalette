import React, { useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();
const isUserLoggedIn = JSON.parse(localStorage.getItem("IsLogged")) || false;
const userData = localStorage.getItem("loginUser");
const parsedUserData = userData ? JSON.parse(userData) : null;

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(isUserLoggedIn);
  const [currentUser, setCurrentUser] = useState(parsedUserData);
  let value = { isAuth, currentUser, SignIn, SignOut };
  function SignIn() {
    var currentUserData = JSON.parse(localStorage.getItem("loginUser"));
    setCurrentUser(currentUserData);
    setIsAuth(true);
    localStorage.setItem("IsLogged", JSON.stringify(true));
  }
  function SignOut() {
    setIsAuth(false);
    setCurrentUser({});
    localStorage.setItem("IsLogged", JSON.stringify(false));
    localStorage.removeItem("loginUser");
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
