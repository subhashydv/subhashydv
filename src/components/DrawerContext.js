// DrawerContext.js
import React, { createContext, useState, useContext } from 'react';

const DrawerContext = createContext();

export const useDrawer = () => useContext(DrawerContext);

export const DrawerProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  return (
    <DrawerContext.Provider value={{ openDrawer, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
