import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCartState = {
 enablecart:false,
 cartItem:[],
 total:0,
 quantity:1,
 count:0,
 isload:false,
 enablenoti:false,
 msg:''
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
  },
  loaddata(state,action){
state.cartItem=action.payload;
state.count++;
  },
  onnoti(state,action){
state.enablenoti=true;
state.msg=action.payload;
  }
  
}
})


const store = configureStore({
  reducer: {  Cart:CartSlice.reducer },
});

export const CartActions = CartSlice.actions;

export default store;