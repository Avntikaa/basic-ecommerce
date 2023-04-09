import { createSlice, configureStore } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initialCartState = {
 enablecart:false,
 cartItem:[],
 total:0,
 quantity:1,
 count:0
};

const CartSlice = createSlice({
  name: 'authentication',
  initialState: initialCartState,
  reducers:{
    openCart(state){
        state.enablecart=!state.enablecart;
    },
     addProduct(state,action){
const [title,price]=action.payload;
const newItem={
    title:title,
    price:price,
}
let existingItem;
 existingItem=state.cartItem.find((i)=>i.title===newItem.title)
console.log(existingItem);
if(!existingItem){
state.cartItem=[...state.cartItem, {title:title,
    price:price,quantity:1}];
state.total=state.total+parseInt(price);
state.count=state.count+1;
}
else{
    existingItem.quantity=existingItem.quantity+1;
}
  },
  increase(state,action){
    const newItem=action.payload;
    const existingItem=state.cartItem.find((i)=>i.title===newItem.title)
existingItem.quantity++;
  },
  decrease(state,action){
    const newItem=action.payload;
    const existingItem=state.cartItem.find((i)=>i.title===newItem.title)
    if(existingItem.quantity==1)
    {
      state.cartItem=state.cartItem.filter((i)=>{
        return i.title!==existingItem.title;
    })
    state.count--;
  }
existingItem.quantity--;
  }
}
})


const store = configureStore({
  reducer: {  Cart:CartSlice.reducer },
});

export const CartActions = CartSlice.actions;

export default store;