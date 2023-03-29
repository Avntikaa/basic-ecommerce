import React, { useContext, useState, createContext} from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [openModal,setOpenmodal]=useState(false);
const ShowCart=()=>{
    setOpenmodal(true);
}
  return (
    <Context.Provider
      value={{
       ShowCart,openModal
        }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);