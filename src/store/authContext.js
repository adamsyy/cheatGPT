import React, { useState} from "react";

const AuthContext = React.createContext({
  email: null,
  login: (email) => {},
  logout: () => {},
});


export const AuthContextProvider = (props) => {
  const initialEmail = localStorage.getItem("email");
  const [email, setEmail] = useState(initialEmail);

  const logoutHandler = () => {
    window.postMessage({ type: "TriggerScore_Logout", text: "LOGOUT" }, "*");
    setEmail(null);
    localStorage.clear();
  };

  const loginHandler = (email) => {
    setEmail(email);
    localStorage.setItem("email", email);
  };



  const authContextValue = {
    email: email,
    login: loginHandler,
    logout: logoutHandler,
  };


  return (
    <AuthContext.Provider value={authContextValue}>

        {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
