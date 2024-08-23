import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const sidebarOpen = () => {
    setOpenSidebar(true);
  };
  const sidebarClose = () => {
    setOpenSidebar(false);
  };
  return (
    <AppContext.Provider value={{ openSidebar, sidebarClose, sidebarOpen }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
