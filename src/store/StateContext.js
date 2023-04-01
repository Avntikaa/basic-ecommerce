import React, { useContext, useState, createContext} from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [openModal,setOpenModal]=useState(false);
  const[cartElements,setCartElements]=useState([]);
  const[update,setUpdate]=useState(0);
  const[loadpage,setLoadPage]=useState(0);
  const[isLogin,setIsLogin]=useState(false);
  const[token,setToken]=useState('null');
;const ShowCart=()=>{
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
       ShowCart,openModal,AddtoCart,cartElements,setOpenModal,update,productsArr,token,setToken,isLogin,setIsLogin
        }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);