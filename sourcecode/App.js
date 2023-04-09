import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Noti from './components/UI/Noti';
import { useEffect } from 'react';
import { CartActions } from './store/reduxdemo';
import axios from 'axios';
function App() {
  const rdx=useSelector((state)=>state.Cart)
const dispatch=useDispatch();
  useEffect(()=>{
    console.log('wdnjn');
    let msg='fail';
    console.log(rdx.isload);
    if(rdx.isload==false && rdx.cartItem.length>0){
      console.log('kjfnjn');
    (async()=>{
   const res=await fetch('https://ecommerce-2f0ac-default-rtdb.firebaseio.com/item.json',
    {
      method:'PUT',
      body:JSON.stringify(rdx.cartItem)
    });
   if(res.ok){
    msg='success'
   }
  console.log(msg);
  dispatch(CartActions.onnoti(msg));

  })()
}
  },[rdx.cartItem])

  useEffect(()=>{
 (async()=>{
    await axios.get('https://ecommerce-2f0ac-default-rtdb.firebaseio.com/item.json')
   .then((response)=>{
    let newarray=[];
      for(let x in response.data){
        newarray=[...newarray,response.data[x]];
      }
      console.log(newarray);
              dispatch(CartActions.loaddata(newarray));

      })
    })()
  },[])
  return (
    <Layout>
      <Noti/>
     {rdx.enablecart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
