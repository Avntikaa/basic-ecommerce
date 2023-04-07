import React, { useContext, useState, createContext,useEffect} from "react";
import axios from 'axios';

const Context = createContext();

export const StateContext = ({ children }) => {
      const[isLogin,setIsLogin]=useState(0);
      const[productArray,setProductArray]=useState([]);
  const [openModal,setOpenModal]=useState(false);
console.log(openModal);
    useEffect(()=>{
        console.log('chujhb');
  (async()=>{
    await axios.get('https://ecommerce-2f0ac-default-rtdb.firebaseio.com/Tshirt.json')
   .then((response)=>{
      for(let x in response.data){
        setProductArray((prev)=>[...prev,response.data[x]]);
      }
      })
    })()
},[])

const ShowCart=()=>{
    setOpenModal(true);
}

const submitdata=(newshirt)=>{
try{
fetch('https://ecommerce-2f0ac-default-rtdb.firebaseio.com/Tshirt.json',{
    method:'POST',
    body:JSON.stringify(newshirt)
})
setIsLogin(0);
alert('success');
}
catch(error){
    console.log(error);
}
}

return (
    <Context.Provider
      value={{
        isLogin,setIsLogin,productArray,submitdata,openModal,setOpenModal,ShowCart
        }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);