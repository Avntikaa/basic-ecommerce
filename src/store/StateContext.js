import React, { useContext, useState, createContext,useEffect} from "react";
import axios from 'axios';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [openModal,setOpenModal]=useState(false);
  const[cartElements,setCartElements]=useState([]);
  const[update,setUpdate]=useState(0);
  const[loadpage,setLoadPage]=useState(0);
  const[isLogin,setIsLogin]=useState(false);
  const[token,setToken]=useState('null');
const[email,setEmail]=useState();
let result;
if(email)
{console.log(email);
result = email.split('@')[0];}

 useEffect(()=>{
  console.log('work');
  if(isLogin){
  axios.get(`https://crudcrud.com/api/e8903a5e233d4c529802e6c5bd10af35/cart${result}`)
   .then((response)=>{
      for(let i=0;i<response.data.length;i++){
setCartElements((prev)=>[...prev,response.data[i]])  
setUpdate((prev)=>prev+1);}
 })
.catch(err=>console.log(err));
    const val=localStorage.getItem('id');
    console.log(typeof(val));
    if(val!=='null'){
      console.log('ufhsh');
setToken(val);
if(email){
setIsLogin(true);
}
    }  
  }
  },[isLogin])
  
  const ShowCart=()=>{
    setOpenModal(true);
}
  const productsArr = [{

title: 'Colors',
price: 100,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
quantity:0,id:1,
review:4
},

{
title: 'Black and white Colors',
price: 50,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
quantity:0,id:2,review:3},

{
title: 'Yellow and Black Colors',
price: 70,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
quantity:0,id:3,review:4
},
{
title: 'Blue Color',
price: 100,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
quantity:0,id:4,review:2
}
]
const AddtoCart=async (item)=>{
    console.log('added')
    let flag=false;
    if(cartElements.length>0){
        cartElements.forEach((i)=>{
            if(i.title===item.title)
            flag=true;
        })
        if(flag===false){
      setCartElements((prev)=>[...prev,item])
      await axios.post(`https://crudcrud.com/api/e8903a5e233d4c529802e6c5bd10af35/cart${result}`,item)
.then(res=>{
console.log(res.data);     })
  .catch(err=>console.log(err));
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
await axios.post(`https://crudcrud.com/api/e8903a5e233d4c529802e6c5bd10af35/cart${result}`,item)
.then(res=>{
console.log(res.data);     })
  .catch(err=>console.log(err));
setUpdate((prev)=>prev+1);
item.quantity=item.quantity+1;
}
setLoadPage((prev)=>prev+1);
}
  return (
    <Context.Provider
      value={{
       ShowCart,openModal,AddtoCart,cartElements,setOpenModal,update,setEmail,email,productsArr,token,setToken,isLogin,setIsLogin
        }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);