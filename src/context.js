import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //State Values
  const [showLogin, setShowLogin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  //Functions
  const showLoginForm = () => {
    if (showSidebar) {
      setShowSidebar(false);
    }
    setShowLogin(true);
  };
  const closeLoginForm = () => {
    setShowLogin(false);
  };
  const openSidebar = () => {
    if (showLogin) {
      setShowLogin(false);
    }
    setShowSidebar(true);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <AppContext.Provider
      value={{
        showLogin,
        showSidebar,
        showLoginForm,
        closeLoginForm,
        openSidebar,
        closeSidebar,
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
