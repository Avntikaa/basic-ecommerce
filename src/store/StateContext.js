import React, { useContext, useState, createContext} from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [openModal,setOpenModal]=useState(false);
  const[cartElements,setCartElements]=useState([]);
  const[update,setUpdate]=useState(0);
  const[loadpage,setLoadPage]=useState(0);
const ShowCart=()=>{
    setOpenModal(true);
}

const AddtoCart=(item)=>{
    console.log('bchbs')
    let flag=false;
    if(cartElements.length>0){
        cartElements.forEach((i)=>{
            if(i.title===item.title)
            flag=true;
        })
        if(flag===false){
      setCartElements((prev)=>[...prev,item])
                  setUpdate((prev)=>prev+1);
        item.quantity=100+1;

        }
        else{
            console.log('already added');
            item.quantity=item.quantity+1;
        }
    }
    else{
setCartElements((prev)=>[...prev,item])
setUpdate((prev)=>prev+1);
item.quantity=item.quantity+1;
      }
      console.log(item);
setLoadPage((prev)=>prev+1);
}
  return (
    <Context.Provider
      value={{
       ShowCart,openModal,AddtoCart,cartElements,setOpenModal,update
        }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);