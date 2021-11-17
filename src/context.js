import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //State Values
  const [showLogin, setShowLogin] = useState(false);

  //Functions
  const showLoginForm = () => {
    setShowLogin(true);
  };
  const closeLoginForm = () => {
    setShowLogin(false);
  };

  return (
    <AppContext.Provider
      value={{
        showLogin,
        showLoginForm,
        closeLoginForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
