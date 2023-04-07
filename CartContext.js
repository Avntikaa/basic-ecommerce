import React, { useContext, useState, createContext,useEffect} from "react";
import axios from 'axios';

const Context = createContext();

export const CartContext = ({ children }) => {
  const[isLogin,setIsLogin]=useState(0);
      const[productArray,setProductArray]=useState([]);
  const [openModal,setOpenModal]=useState(false);
    const[cartElements,setCartElements]=useState([]);
  const[update,setUpdate]=useState(0);
const[price,setPrice]=useState(0);
  const url='d67f562ce36d46f688a87fce85becc0d';
console.log(openModal);

useEffect(()=>{
    (async()=>{
      await axios.get(`https://crudcrud.com/api/${url}/carts`)
   .then((response)=>{
      for(let i=0;i<response.data.length;i++){
        console.log(response.data[i])
setCartElements((prev)=>[...prev,response.data[i]]) 
setUpdate((prev)=>prev+1);
let newp=response.data[i].price*response.data[i].quantity;
setPrice((prev)=>prev+newp);
      } 
 })
.catch(err=>console.log('hii'));
    })()
      
   
  },[])
  
  
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

const AddCart=async(item,Psize)=>{
     const newArray = [...cartElements];
console.log(Psize);
const newTshirtArray=[...productArray];
    let flag=false;
    let indexs,ind;
    let article;
    let Lindex;
newTshirtArray.forEach((i,index)=>{
if(i.title===item.title)
            {
            Lindex=index;
            }
})
let count=0;
console.log(newTshirtArray[Lindex][Psize]);
 newTshirtArray[Lindex][Psize]= Number(newTshirtArray[Lindex][Psize]) -1;
 console.log(newTshirtArray);
await axios.get(`https://ecommerce-2f0ac-default-rtdb.firebaseio.com/Tshirt.json`)
   .then((response)=>{
 for(let x in response.data){
count=count+1;
        if(response.data[x].title==item.title)
        ind=x;
      }  
       article=newTshirtArray[Lindex];
       })
       await axios.put(`https://ecommerce-2f0ac-default-rtdb.firebaseio.com/Tshirt/${ind}.json`,article)
.then(res=>{
console.log(res.data);     })
  .catch(err=>console.log(err)); 

    if(newArray.length>0){
        newArray.forEach((i,index)=>{
            if(i.title===item.title)
            {
            flag=true;
            indexs=index;
            }
        })
        if(flag===false){
          console.log('new added');
      setCartElements((prev)=>[...prev,item])
      await axios.post(`https://crudcrud.com/api/${url}/carts`,item)
.then(res=>{
    console.log(res.data);
   })
  .catch(err=>console.log(err));
                  setUpdate((prev)=>prev+1);
                  setPrice((prev)=>prev+item.price);
      }
        else{
          console.log(indexs);
            console.log('already added');
            console.log(newArray);
                        newArray[indexs].quantity = Number(newArray[indexs].quantity) + 1;
                         article={
              title:item.title,
               price:item.price,
               quantity:newArray[indexs].quantity
            }
           

        }
    }


    else{
      console.log('new added')
setCartElements((prev)=>[...prev,item])
await axios.post(`https://crudcrud.com/api/${url}/carts`,item)
.then(res=>{
console.log(res.data); 
})
  .catch(err=>console.log(err));
setUpdate((prev)=>prev+1);
                  setPrice((prev)=>prev+item.price);

}
            setProductArray(newTshirtArray);

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
        isLogin,setIsLogin,productArray,submitdata,openModal,setOpenModal,ShowCart,AddCart,cartElements,setCartElements,price,update
        }}>
      {children}
    </Context.Provider>
  )
}

export const useCartContext = () => useContext(Context);